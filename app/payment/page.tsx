"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
];

const LOCALES: Record<string, any> = {
  en: {
    title: "Payment & Billing Policy",
    lastUpdated: "Last Updated: May 26, 2026",
    backHome: "← Back to Home",
    sec1Title: "1. Secure In-App Purchases",
    sec1Desc1: "We offer advanced features via Pro-plan and Premium-plan subscription tiers. All payments, transactions, in-app purchases, and auto-renewable subscriptions are securely managed, processed, and verified through:",
    sec1Bullet1: "Apple App Store: For iOS device users.",
    sec1Bullet2: "Google Play Store: For Android device users.",
    sec1Desc2: "We use the industry-leading RevenueCat SDK to handle server-side subscription state checks, ensuring your purchase state is verified and synchronized across your account securely.",
    
    sec2Title: "2. Auto-Renewable Subscriptions",
    sec2Desc: "Our subscription packages (Pro and Premium) are offered on a monthly or yearly basis:",
    sec2Bullet1: "Billing Period: Subscription charges are billed immediately upon confirmation of purchase to your Apple iTunes Account or Google Play Store Account.",
    sec2Bullet2: "Automatic Renewal: Your subscription will automatically renew at the end of the billing cycle (monthly or yearly) unless auto-renew is turned off at least 24 hours prior to the conclusion of the current subscription period.",
    sec2Bullet3: "Account Charges for Renewal: Your account will be charged for renewal at the same subscription rate within 24 hours prior to the end of the current period.",
    sec2Bullet4: "Active Period Cancellations: No cancellation of the current subscription is allowed during the active subscription period. If you cancel, your benefits remain active until the billing cycle ends.",
    sec2Bullet5: "Free Trial Terms: Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription to that tier, where applicable.",
    
    sec3Title: "3. Cancellation Policy",
    sec3Desc: "You are free to manage and cancel your subscriptions at any time. Active subscriptions can be easily managed by visiting your account settings in the respective app stores after purchase:",
    sec3Bullet1: "For iOS users: Go to iPhone Settings > [Your Name] > Subscriptions > Select \"Are You Okay?\" > Cancel Subscription.",
    sec3Bullet2: "For Android users: Open Google Play Store > Tap Profile Icon > Payments & Subscriptions > Subscriptions > Select \"Are You Okay?\" > Cancel Subscription.",
    sec3Desc2: "If you cancel, your active subscription benefits will remain fully functional until the end of your current billing cycle.",
    
    sec4Title: "4. Refund Policy",
    sec4Desc: "Since all payments and subscription bills are directly processed by Apple and Google, we do not store your credit card details on our servers, nor do we have the administrative authority to issue direct billing refunds. All refund claims and disputes must be addressed directly to the store operator:",
    sec4Bullet1: "Requesting iOS Refunds: Please visit Apple's support portal at https://reportaproblem.apple.com.",
    sec4Bullet2: "Requesting Android Refunds: Please visit Google Play Refund support.",
    
    sec5Title: "5. Subscriptions & Tier Benefits",
    sec5ThFeature: "Feature",
    sec5ThFree: "Free-plan",
    sec5ThPro: "Pro-plan",
    sec5ThPrem: "Premium-plan",
    sec5Feat1Name: "Ad Experience",
    sec5Feat1Free: "Contains Ads",
    sec5Feat1Pro: "No Ads",
    sec5Feat1Prem: "No Ads",
    sec5Feat2Name: "Safety Net Contacts",
    sec5Feat2Free: "1 Contact",
    sec5Feat2Pro: "3 Contacts",
    sec5Feat2Prem: "5 Contacts",
    sec5Feat3Name: "Journals Allowed",
    sec5Feat3Free: "Only when \"Not Okay\"",
    sec5Feat3Pro: "Only when \"Not Okay\"",
    sec5Feat3Prem: "ALL Moods (including \"Okay\")",
    sec5Feat4Name: "AI Psychologist Counselor",
    sec5Feat4Free: "Unavailable",
    sec5Feat4Pro: "Unavailable",
    sec5Feat4Prem: "2 sessions / day",
    sec5Feat5Name: "Friend Journals Followed",
    sec5Feat5Free: "1 friend (with Ads)",
    sec5Feat5Pro: "3 friends",
    sec5Feat5Prem: "Up to 10 friends",
    
    sec6Title: "6. Billing Queries & Support",
    sec6Desc: "For general billing queries or assistance with account synchronization, please contact our support team at:",
    footerRights: "© 2026 Are You Okay? Team. All rights reserved."
  },
  vi: {
    title: "Chính sách Thanh toán & Gói cước",
    lastUpdated: "Cập nhật lần cuối: 26 tháng 5, 2026",
    backHome: "← Quay lại trang chủ",
    sec1Title: "1. Thanh toán Bảo mật Trong ứng dụng",
    sec1Desc1: "Chúng tôi cung cấp các tính năng cao cấp thông qua hai gói dịch vụ nâng cấp: Pro-plan và Premium-plan. Tất cả các giao dịch thanh toán, gia hạn và mua hàng trong ứng dụng đều được xử lý và xác minh bảo mật tuyệt đối thông qua:",
    sec1Bullet1: "Apple App Store: Dành cho người dùng thiết bị iOS.",
    sec1Bullet2: "Google Play Store: Dành cho người dùng thiết bị Android.",
    sec1Desc2: "Chúng tôi sử dụng bộ công cụ RevenueCat SDK hàng đầu thế giới để đồng bộ và xác thực trạng thái gói dịch vụ của bạn một cách an toàn nhất từ máy chủ, tránh tình trạng giả mạo dữ liệu.",
    
    sec2Title: "2. Đăng ký Tự động Gia hạn",
    sec2Desc: "Các gói dịch vụ nâng cấp (Pro và Premium) được cung cấp dưới dạng đăng ký tự động gia hạn theo Tháng hoặc theo Năm:",
    sec2Bullet1: "Chu kỳ thanh toán: Khoản thanh toán đăng ký gói sẽ được tính vào Tài khoản iTunes hoặc Google Play của bạn ngay khi bạn xác nhận mua hàng thành công.",
    sec2Bullet2: "Tự động gia hạn: Gói dịch vụ của bạn sẽ tự động gia hạn vào cuối mỗi chu kỳ (hàng tháng hoặc hàng năm) trừ khi bạn tắt tính năng tự động gia hạn ít nhất 24 giờ trước khi kết thúc chu kỳ thanh toán hiện tại.",
    sec2Bullet3: "Phí gia hạn: Tài khoản của bạn sẽ bị tính phí gia hạn trong vòng 24 giờ trước khi kết thúc chu kỳ hiện tại với cùng mức giá ban đầu.",
    sec2Bullet4: "Không hủy chu kỳ hiện tại: Không cho phép hủy đăng ký gói đang hoạt động trong suốt chu kỳ thanh toán hiện tại của gói đó. Quyền lợi nâng cấp của bạn vẫn sẽ duy trì đầy đủ cho đến ngày kết thúc chu kỳ.",
    sec2Bullet5: "Quy định dùng thử miễn phí: Bất kỳ phần nào chưa được sử dụng trong thời gian dùng thử miễn phí (nếu có) sẽ bị hủy bỏ ngay khi bạn đăng ký mua gói cước chính thức của tier đó.",
    
    sec3Title: "3. Hướng dẫn Hủy gia hạn",
    sec3Desc: "Bạn hoàn toàn có thể tự quản lý và hủy tự động gia hạn gói cước của mình bất kỳ lúc nào thông qua phần Cài đặt tài khoản cửa hàng tương ứng sau khi mua:",
    sec3Bullet1: "Dành cho thiết bị iOS: Vào Cài đặt iPhone > [Tên của bạn] > Đăng ký > Chọn \"Are You Okay?\" > Hủy đăng ký.",
    sec3Bullet2: "Dành cho thiết bị Android: Mở Google Play Store > Nhấn vào ảnh hồ sơ > Thanh toán & Đăng ký > Gói đăng ký > Chọn \"Are You Okay?\" > Hủy đăng ký.",
    sec3Desc2: "Nếu bạn hủy, các quyền lợi của gói cước đang hoạt động vẫn sẽ được duy trì đầy đủ cho tới khi chu kỳ thanh toán hiện tại kết thúc.",
    
    sec4Title: "4. Chính sách Hoàn tiền",
    sec4Desc: "Vì tất cả các khoản thanh toán và hóa đơn đều được xử lý trực tiếp bởi Apple và Google, chúng tôi không lưu giữ thông tin thẻ tín dụng của bạn trên máy chủ, đồng thời không có thẩm quyền phát hành hoàn tiền trực tiếp. Mọi yêu cầu hoàn tiền hoặc khiếu nại phải được gửi trực tiếp đến nhà phát hành cửa hàng tương ứng:",
    sec4Bullet1: "Yêu cầu hoàn tiền trên iOS: Vui lòng truy cập trang hỗ trợ của Apple tại https://reportaproblem.apple.com.",
    sec4Bullet2: "Yêu cầu hoàn tiền trên Android: Vui lòng truy cập trang hỗ trợ của Google Play.",
    
    sec5Title: "5. So sánh Quyền lợi các Gói dịch vụ",
    sec5ThFeature: "Tính năng",
    sec5ThFree: "Gói Miễn phí",
    sec5ThPro: "Gói Pro",
    sec5ThPrem: "Gói Premium",
    sec5Feat1Name: "Quảng cáo",
    sec5Feat1Free: "Có quảng cáo",
    sec5Feat1Pro: "Không quảng cáo",
    sec5Feat1Prem: "Không quảng cáo",
    sec5Feat2Name: "Liên hệ khẩn cấp",
    sec5Feat2Free: "Tối đa 1 người",
    sec5Feat2Pro: "Tối đa 3 người",
    sec5Feat2Prem: "Tối đa 5 người",
    sec5Feat3Name: "Nhật ký cảm xúc",
    sec5Feat3Free: "Chỉ khi \"Không ổn\"",
    sec5Feat3Pro: "Chỉ khi \"Không ổn\"",
    sec5Feat3Prem: "MỌI trạng thái (gồm cả \"Tôi Ổn\")",
    sec5Feat4Name: "Lời khuyên tâm lý AI",
    sec5Feat4Free: "Không khả dụng",
    sec5Feat4Pro: "Không khả dụng",
    sec5Feat4Prem: "2 phiên / ngày",
    sec5Feat5Name: "Theo dõi bạn bè",
    sec5Feat5Free: "1 bạn (Cần xem ads)",
    sec5Feat5Pro: "Tối đa 3 bạn",
    sec5Feat5Prem: "Tối đa 10 bạn",
    
    sec6Title: "6. Hỗ trợ & Câu hỏi Thanh toán",
    sec6Desc: "Đối với các câu hỏi về thanh toán hoặc hỗ trợ đồng bộ tài khoản, vui lòng liên hệ với nhóm hỗ trợ của chúng tôi tại:",
    footerRights: "© 2026 Are You Okay? Team. Tất cả các quyền được bảo lưu."
  },
  zh: {
    title: "付款与计费政策",
    lastUpdated: "最后更新：2026年5月26日",
    backHome: "← 返回首页",
    sec1Title: "1. 安全的应用内购买",
    sec1Desc1: "我们通过 Pro 和 Premium 订阅计划提供高级功能。所有应用内购买、交易和自动续订订阅服务均通过以下渠道安全管理、处理和验证：",
    sec1Bullet1: "Apple App Store：针对 iOS 设备用户。",
    sec1Bullet2: "Google Play Store：针对 Android 设备用户。",
    sec1Desc2: "我们使用行业领先的 RevenueCat SDK 进行服务器端订阅状态校验，以确保您的购买状态能够安全地在您的账户中进行同步和验证。",
    
    sec2Title: "2. 自动续订订阅",
    sec2Desc: "我们的订阅计划（Pro 和 Premium）按月或按年提供：",
    sec2Bullet1: "计费周期：在您确认购买后，订阅费用将立即从您的 Apple iTunes 账户或 Google Play 商店账户中扣除。",
    sec2Bullet2: "自动续订：除非在当前订阅期结束前至少 24 小时关闭自动续订，否则您的订阅将在计费周期结束时自动续订。",
    sec2Bullet3: "续订扣费：您的账户将在当前周期结束前 24 小时内按原有订阅价格扣除续订费用。",
    sec2Bullet4: "有效订阅期取消：在有效的订阅期内，不允许取消当前的订阅。如果您取消订阅，您的特权将保持有效直至计费周期结束。",
    sec2Bullet5: "免费试用条款：在适用情况下，当您购买该级别的订阅时，免费试用期的任何未使用部分（如果提供）将被自动作废。",
    
    sec3Title: "3. 取消政策",
    sec3Desc: "您可以随时自由地管理和取消您的订阅。购买后，您可以通过访问相应应用商店的账户设置来轻松管理活动订阅：",
    sec3Bullet1: "iOS 用户：进入 iPhone 设置 > [您的姓名] > 订阅 > 选择 \"Are You Okay?\" > 取消订阅。",
    sec3Bullet2: "Android 用户：打开 Google Play 商店 > 点击个人资料图标 > 付款和订阅 > 订阅 > 选择 \"Are You Okay?\" > 取消订阅。",
    sec3Desc2: "如果您取消订阅，您的活动订阅特权在当前计费周期结束前仍可完全正常使用。",
    
    sec4Title: "4. 退款政策",
    sec4Desc: "由于所有付款和订阅账单均由 Apple 和 Google 直接处理，我们不会在服务器上存储您的信用卡信息，也无权直接进行退款。所有退款申请和纠纷必须直接提交给相应的商店运营商：",
    sec4Bullet1: "申请 iOS 退款：请访问 Apple 支持门户网站 https://reportaproblem.apple.com。",
    sec4Bullet2: "申请 Android 退款：请访问 Google Play 退款支持页面。",
    
    sec5Title: "5. 订阅计划与会员权益",
    sec5ThFeature: "功能权益",
    sec5ThFree: "免费版",
    sec5ThPro: "Pro 专业版",
    sec5ThPrem: "Premium 旗舰版",
    sec5Feat1Name: "广告体验",
    sec5Feat1Free: "包含广告",
    sec5Feat1Pro: "无广告",
    sec5Feat1Prem: "无广告",
    sec5Feat2Name: "安全网联系人",
    sec5Feat2Free: "1 位联系人",
    sec5Feat2Pro: "3 位联系人",
    sec5Feat2Prem: "5 位联系人",
    sec5Feat3Name: "心情日记记录",
    sec5Feat3Free: "仅限「不舒服」状态",
    sec5Feat3Pro: "仅限「不舒服」状态",
    sec5Feat3Prem: "所有心情（包括「我很好」）",
    sec5Feat4Name: "AI 心理咨询师",
    sec5Feat4Free: "不可用",
    sec5Feat4Pro: "不可用",
    sec5Feat4Prem: "每天 2 次会话",
    sec5Feat5Name: "关注好友日记",
    sec5Feat5Free: "1 位好友（含广告）",
    sec5Feat5Pro: "最多 3 位好友",
    sec5Feat5Prem: "最多 10 位好友",
    
    sec6Title: "6. 账单咨询与支持",
    sec6Desc: "如有任何账单查询或账户同步支持方面的需求，请通过以下邮箱与我们的支持团队联系：",
    footerRights: "© 2026 Are You Okay? 团队。保留所有权利。"
  },
  ja: {
    title: "お支払いと請求ポリシー",
    lastUpdated: "最終更新日: 2026年5月26日",
    backHome: "← ホームに戻る",
    sec1Title: "1. 安全なアプリ内購入",
    sec1Desc1: "ProプランおよびPremiumプランの購読を通じて、高度な機能を提供しています。すべての決済、取引、アプリ内購入、自動更新サブスクリプションは、以下のプラットフォームを通じて安全に管理、処理、検証されています：",
    sec1Bullet1: "Apple App Store: iOSデバイスのユーザー向け。",
    sec1Bullet2: "Google Play Store: Androidデバイスのユーザー向け。",
    sec1Desc2: "業界をリードする RevenueCat SDK を使用してサーバー側の購読状態の確認を行い、購入状態が安全に検証され、アカウント間で同期されることを保証しています。",
    
    sec2Title: "2. 自動更新サブスクリプション",
    sec2Desc: "サブスクリプションパッケージ（ProおよびPremium）は、月単位または年単位で提供されます：",
    sec2Bullet1: "請求期間：サブスクリプション料金は、購入確認時にお客様のApple iTunesアカウントまたはGoogle Playストアアカウントに即座に請求されます。",
    sec2Bullet2: "自動更新：現在の購読期間が終了する24時間以上前に自動更新をオフにしない限り、サブスクリプションは各期間（月または年）の終了時に自動的に更新されます。",
    sec2Bullet3: "更新請求：現在の期間が終了する前24時間以内に、同じサブスクリプション価格で更新料がお客様のアカウントに請求されます。",
    sec2Bullet4: "有効期間中のキャンセル：有効な購読期間中に現在のサブスクリプションをキャンセルすることはできません。キャンセルした場合も、請求サイクルが終了するまで特典は有効です。",
    sec2Bullet5: "無料試用規約：無料試用期間が提供されている場合、該当するプランのサブスクリプションを購入した時点で、その試用期間の未使用分は失効します。",
    
    sec3Title: "3. 解約ポリシー",
    sec3Desc: "サブスクリプションはいつでも自由に変更・解約できます。アクティブなサブスクリプションは、購入後に各アプリストアのアカウント設定にアクセスして簡単に管理できます：",
    sec3Bullet1: "iOSユーザーの場合：iPhoneの設定 > [ユーザー名] > サブスクリプション > 「Are You Okay?」を選択 > サブスクリプションをキャンセルする。",
    sec3Bullet2: "Androidユーザーの場合：Google Playストアを開く > プロファイルアイコンをタップ > お支払いと定期購入 > 定期購入 > 「Are You Okay?」を選択 > 定期購入を解約する。",
    sec3Desc2: "サブスクリプションを解約した場合でも、現在の請求サイクルの終了までアクティブな購読特典を完全にご利用いただけます。",
    
    sec4Title: "4. 返金ポリシー",
    sec4Desc: "すべての決済および定期課金はAppleとGoogleによって直接処理されるため、当社はお客様のクレジットカード情報をサーバーに保存せず、直接返金を行う権限を持ちません。返金に関する請求や紛争は、各ストア運営者に直接申し立てる必要があります：",
    sec4Bullet1: "iOSの返金申請：Appleのサポートポータル（https://reportaproblem.apple.com）にアクセスしてください。",
    sec4Bullet2: "Androidの返金申請：Google Playの返金サポートページにアクセスしてください。",
    
    sec5Title: "5. サブスクリプション特典の比較",
    sec5ThFeature: "機能・特典",
    sec5ThFree: "フリープラン",
    sec5ThPro: "プロプラン",
    sec5ThPrem: "プレミアムプラン",
    sec5Feat1Name: "広告の表示",
    sec5Feat1Free: "広告あり",
    sec5Feat1Pro: "広告なし",
    sec5Feat1Prem: "広告なし",
    sec5Feat2Name: "緊急連絡先",
    sec5Feat2Free: "1件登録可能",
    sec5Feat2Pro: "3件登録可能",
    sec5Feat2Prem: "5件登録可能",
    sec5Feat3Name: "日記の作成制限",
    sec5Feat3Free: "「不調時」のみ可能",
    sec5Feat3Pro: "「不調時」のみ可能",
    sec5Feat3Prem: "すべての気分（「好調時」も含む）",
    sec5Feat4Name: "AI心理カウンセラー",
    sec5Feat4Free: "利用不可",
    sec5Feat4Pro: "利用不可",
    sec5Feat4Prem: "1日2セッションまで",
    sec5Feat5Name: "友だち日記のフォロー",
    sec5Feat5Free: "1人（広告あり）",
    sec5Feat5Pro: "最大3人まで",
    sec5Feat5Prem: "最大10人まで",
    
    sec6Title: "6. お支払いに関するお問い合わせとサポート",
    sec6Desc: "お支払いに関する一般的なご質問や、アカウントの同期に関するサポートにつきましては、当社のサポートチームまでメールにてご連絡ください：",
    footerRights: "© 2026 Are You Okay? チーム。無断転載を禁じます。"
  },
  ko: {
    title: "결제 및 청구 정책",
    lastUpdated: "최근 업데이트: 2026년 5월 26일",
    backHome: "← 홈으로 돌아가기",
    sec1Title: "1. 안전한 인앱 구매",
    sec1Desc1: "당사는 Pro 및 Premium 구독을 통해 고급 기능을 제공합니다. 모든 결제, 거래, 인앱 구매 및 자동 갱신 구독은 다음 플랫폼을 통해 안전하게 관리, 처리 및 확인됩니다:",
    sec1Bullet1: "Apple App Store: iOS 기기 사용자용.",
    sec1Bullet2: "Google Play Store: Android 기기 사용자용.",
    sec1Desc2: "당사는 업계 최고의 RevenueCat SDK를 사용하여 서버 측 구독 상태를 확인하므로, 귀하의 구매 상태가 안전하게 인증되고 계정 전체에 안전하게 동기화됩니다.",
    
    sec2Title: "2. 자동 갱신 구독",
    sec2Desc: "당사의 구독 서비스(Pro 및 Premium)는 월간 또는 연간 단위로 제공됩니다:",
    sec2Bullet1: "청구 기간: 구독 요금은 구매 확인 즉시 Apple iTunes 계정 또는 Google Play 스토어 계정으로 청구됩니다.",
    sec2Bullet2: "자동 갱신: 현재 구독 기간이 끝나기 최소 24시간 전에 자동 갱신을 해제하지 않으면 각 결제 주기(매월 또는 매년)의 종료 시 구독이 자동으로 갱신됩니다.",
    sec2Bullet3: "갱신 청구 요금: 현재 구독 기간이 끝나기 전 24시간 이내에 동일한 구독 요율로 귀하의 계정에 갱신 요금이 청구됩니다.",
    sec2Bullet4: "활성 기간 중 취소: 활성 구독 기간 중에는 현재 구독의 중도 취소가 허용되지 않습니다. 구독을 해지하더라도 혜택은 해당 청구 주기가 종료될 때까지 활성 상태로 유지됩니다.",
    sec2Bullet5: "무료 체험 조건: 무료 체험 기간이 제공되는 경우, 해당 서비스의 정기 구독을 구매할 때 사용하지 않은 무료 체험 기간은 즉시 소멸됩니다.",
    
    sec3Title: "3. 취소 정책",
    sec3Desc: "구독은 언제든지 자유롭게 관리하고 취소할 수 있습니다. 활성화된 구독은 구매 후 각 앱 스토어의 계정 설정에 액세스하여 쉽게 관리할 수 있습니다:",
    sec3Bullet1: "iOS 사용자: iPhone 설정 > [사용자 이름] > 구독 > \"Are You Okay?\" 선택 > 구독 취소.",
    sec3Bullet2: "Android 사용자: Google Play 스토어 열기 > 프로필 아이콘 탭 > 결제 및 정기 결제 > 정기 결제 > \"Are You Okay?\" 선택 > 정기 결제 취소.",
    sec3Desc2: "구독을 해지하시더라도 현재 청구 주기가 끝날 때까지 활성화된 구독 혜택을 온전히 계속 이용하실 수 있습니다.",
    
    sec4Title: "4. 환불 정책",
    sec4Desc: "모든 결제 및 구독 청구는 Apple과 Google이 직접 처리하므로 당사는 신용카드 정보를 보관하지 않으며 환불을 직접 처리할 권한이 없습니다. 환불 요청 및 분쟁 제기는 각 스토어 운영사에 직접 제출하셔야 합니다:",
    sec4Bullet1: "iOS 환불 요청: Apple 지원 포털(https://reportaproblem.apple.com)을 방문해 주십시오.",
    sec4Bullet2: "Android 환불 요청: Google Play 환불 지원 페이지를 방문해 주십시오.",
    
    sec5Title: "5. 구독 등급 및 혜택 비교",
    sec5ThFeature: "주요 기능",
    sec5ThFree: "무료 플랜",
    sec5ThPro: "프로 플랜",
    sec5ThPrem: "프리미엄 플랜",
    sec5Feat1Name: "광고 경험",
    sec5Feat1Free: "광고 포함",
    sec5Feat1Pro: "광고 제거",
    sec5Feat1Prem: "광고 제거",
    sec5Feat2Name: "비상 연락처",
    sec5Feat2Free: "1명 등록",
    sec5Feat2Pro: "3명 등록",
    sec5Feat2Prem: "5명 등록",
    sec5Feat3Name: "일기 쓰기 제한",
    sec5Feat3Free: "\"괜찮지 않음\" 상태일 때만",
    sec5Feat3Pro: "\"괜찮지 않음\" 상태일 때만",
    sec5Feat3Prem: "모든 상태 기록 ( \"괜찮음\" 포함 )",
    sec5Feat4Name: "AI 심리 상담사",
    sec5Feat4Free: "이용 불가",
    sec5Feat4Pro: "이용 불가",
    sec5Feat4Prem: "일 2회 세션",
    sec5Feat5Name: "친구 일기 팔로우",
    sec5Feat5Free: "1명 (광고 노출)",
    sec5Feat5Pro: "최대 3명",
    sec5Feat5Prem: "최대 10명",
    
    sec6Title: "6. 결제 문의 및 지원",
    sec6Desc: "결제 관련 일반 문의 사항이나 계정 연동 지원이 필요하신 경우, 아래 이메일로 당사 지원 팀에 문의해 주시기 바랍니다:",
    footerRights: "© 2026 Are You Okay? 팀. All rights reserved."
  },
  es: {
    title: "Política de Pago y Facturación",
    lastUpdated: "Última actualización: 26 de mayo de 2026",
    backHome: "← Volver al inicio",
    sec1Title: "1. Compras Seguras en la Aplicación",
    sec1Desc1: "Ofrecemos funciones avanzadas a través de los niveles de suscripción Pro-plan y Premium-plan. Todos los pagos, transacciones, compras integradas y suscripciones autorenovables se gestionan, procesan y verifican de forma segura a través de:",
    sec1Bullet1: "Apple App Store: Para usuarios de dispositivos iOS.",
    sec1Bullet2: "Google Play Store: Para usuarios de dispositivos Android.",
    sec1Desc2: "Utilizamos RevenueCat SDK, líder en la industria, para manejar las verificaciones del estado de la suscripción en el servidor, garantizando que su estado de compra se verifique y sincronice en su cuenta de manera segura.",
    
    sec2Title: "2. Suscripciones Autorenovables",
    sec2Desc: "Nuestros paquetes de suscripción (Pro y Premium) se ofrecen de forma mensual o anual:",
    sec2Bullet1: "Período de Facturación: Los cargos de suscripción se facturan inmediatamente tras la confirmación de la compra en su cuenta de Apple iTunes o en su cuenta de Google Play Store.",
    sec2Bullet2: "Renovación Automática: Su suscripción se renovará automáticamente al final del ciclo de facturación (mensual o anual) a menos que se desactive la autorenovación al menos 24 horas antes de la conclusión del período de suscripción actual.",
    sec2Bullet3: "Cargos de Renovación: Se cobrará la renovación en su cuenta dentro de las 24 horas anteriores al final del período actual con la misma tarifa de suscripción.",
    sec2Bullet4: "Cancelaciones del Período Activo: No se permite la cancelación de la suscripción activa durante el período de suscripción en curso. Si cancela, sus beneficios seguirán activos hasta que finalice el ciclo de facturación.",
    sec2Bullet5: "Términos de Prueba Gratuita: Cualquier parte no utilizada de un período de prueba gratuito, si se ofrece, se perderá cuando compre una suscripción a ese plan, según corresponda.",
    
    sec3Title: "3. Política de Cancelación",
    sec3Desc: "Usted es libre de gestionar y cancelar sus suscripciones en cualquier momento. Las suscripciones activas se pueden gestionar fácilmente visitando los ajustes de su cuenta en las respectivas tiendas de aplicaciones después de la compra:",
    sec3Bullet1: "Para usuarios de iOS: Vaya a Ajustes del iPhone > [Su Nombre] > Suscripciones > Seleccione \"Are You Okay?\" > Cancelar suscripción.",
    sec3Bullet2: "Para usuarios de Android: Abra Google Play Store > Toque el icono de perfil > Pagos y suscripciones > Suscripciones > Seleccione \"Are You Okay?\" > Cancelar suscripción.",
    sec3Desc2: "Si cancela, los beneficios de su suscripción activa seguirán siendo totalmente funcionales hasta el final de su ciclo de facturación actual.",
    
    sec4Title: "4. Política de Reembolso",
    sec4Desc: "Dado que todos los pagos y facturas de suscripción son procesados directamente por Apple y Google, nosotros no almacenamos los datos de su tarjeta de crédito en nuestros servidores, ni tenemos la autoridad administrativa para emitir reembolsos directos. Todos los reclamos y disputas de reembolso deben dirigirse directamente al operador de la tienda:",
    sec4Bullet1: "Solicitud de reembolsos en iOS: Visite el portal de soporte de Apple en https://reportaproblem.apple.com.",
    sec4Bullet2: "Solicitud de reembolsos en Android: Visite el soporte de reembolsos de Google Play.",
    
    sec5Title: "5. Comparación de Beneficios de Suscripción",
    sec5ThFeature: "Característica",
    sec5ThFree: "Plan Gratis",
    sec5ThPro: "Plan Pro",
    sec5ThPrem: "Plan Premium",
    sec5Feat1Name: "Anuncios",
    sec5Feat1Free: "Contiene anuncios",
    sec5Feat1Pro: "Sin anuncios",
    sec5Feat1Prem: "Sin anuncios",
    sec5Feat2Name: "Contactos de Emergencia",
    sec5Feat2Free: "1 Contacto",
    sec5Feat2Pro: "3 Contactos",
    sec5Feat2Prem: "5 Contactos",
    sec5Feat3Name: "Registro de Diarios",
    sec5Feat3Free: "Solo si \"No estoy bien\"",
    sec5Feat3Pro: "Solo si \"No estoy bien\"",
    sec5Feat3Prem: "TODOS los estados (incluyendo \"Estoy bien\")",
    sec5Feat4Name: "Terapeuta con IA",
    sec5Feat4Free: "No disponible",
    sec5Feat4Pro: "No disponible",
    sec5Feat4Prem: "2 sesiones al día",
    sec5Feat5Name: "Seguir Diarios de Amigos",
    sec5Feat5Free: "1 amigo (con anuncios)",
    sec5Feat5Pro: "Hasta 3 amigos",
    sec5Feat5Prem: "Hasta 10 amigos",
    
    sec6Title: "6. Consultas de Facturación y Soporte",
    sec6Desc: "Para preguntas generales de facturación o asistencia con la sincronización de cuentas, comuníquese con nuestro equipo de soporte en:",
    footerRights: "© 2026 Are You Okay? Team. Todos los derechos reservados."
  },
  pt: {
    title: "Política de Pagamento e Faturação",
    lastUpdated: "Última atualização: 26 de maio de 2026",
    backHome: "← Voltar ao início",
    sec1Title: "1. Compras Seguras na Aplicação",
    sec1Desc1: "Oferecemos funcionalidades avançadas através dos níveis de subscrição Pro-plan e Premium-plan. Todos os pagamentos, transações, compras na aplicação e subscrições auto-renováveis são geridos, processados e verificados de forma segura através da:",
    sec1Bullet1: "Apple App Store: Para utilizadores de dispositivos iOS.",
    sec1Bullet2: "Google Play Store: Para utilizadores de dispositivos Android.",
    sec1Desc2: "Utilizamos o RevenueCat SDK, líder na indústria, para lidar com as verificações de estado das subscrições no servidor, garantindo que o seu estado de compra é verificado e sincronizado na sua conta de forma segura.",
    
    sec2Title: "2. Subscrições Auto-Renováveis",
    sec2Desc: "Os nossos pacotes de subscrição (Pro e Premium) são disponibilizados numa base mensal ou anual:",
    sec2Bullet1: "Período de Faturação: As cobranças de subscrição são faturadas imediatamente após a confirmação da compra na sua Conta iTunes da Apple ou Conta da Google Play Store.",
    sec2Bullet2: "Renovação Automática: A sua subscrição será renovada automaticamente no final do ciclo de faturação (mensal ou anual), a menos que a renovação automática seja desativada pelo menos 24 horas antes do fim do período de subscrição atual.",
    sec2Bullet3: "Encargos de Renovação de Conta: A sua conta será cobrada para renovação à mesma taxa de subscrição dentro das 24 horas anteriores ao fim do período atual.",
    sec2Bullet4: "Cancelamentos no Período Ativo: Não é permitido o cancelamento da subscrição atual durante o período ativo da mesma. Se cancelar, os seus benefícios permanecerão ativos até ao fim do ciclo de faturação.",
    sec2Bullet5: "Termos de Período de Teste Gratuito: Qualquer parte não utilizada de um período de teste gratuito, se oferecido, será cancelada ao adquirir uma subscrição para esse plano, onde aplicável.",
    
    sec3Title: "3. Política de Cancelamento",
    sec3Desc: "Tem total liberdade para gerir e cancelar as suas subscrições a qualquer momento. As subscrições ativas podem ser facilmente geridas acedendo às definições da sua conta nas respetivas lojas de aplicações após a compra:",
    sec3Bullet1: "Para utilizadores de iOS: Vá a Definições do iPhone > [O seu Nome] > Subscrições > Selecione \"Are You Okay?\" > Cancelar Subscrição.",
    sec3Bullet2: "Para utilizadores de Android: Abra a Google Play Store > Toque no ícone do Perfil > Pagamentos e Subscrições > Subscrições > Selecione \"Are You Okay?\" > Cancelar Subscrição.",
    sec3Desc2: "Se cancelar, os seus benefícios de subscrição ativa permanecerão totalmente operacionais até ao final do período de faturação atual.",
    
    sec4Title: "4. Política de Reembolso",
    sec4Desc: "Dado que todos os pagamentos e faturas de subscrição são diretamente processados pela Apple e pela Google, não guardamos os dados do seu cartão de crédito nos nossos servidores, nem temos autoridade administrativa para emitir reembolsos diretos de faturação. Todos os pedidos de reembolso e disputas devem ser encaminhados diretamente para o operador da loja:",
    sec4Bullet1: "Solicitar Reembolsos em iOS: Visite o portal de suporte da Apple em https://reportaproblem.apple.com.",
    sec4Bullet2: "Solicitar Reembolsos em Android: Visite o suporte de reembolsos do Google Play.",
    
    sec5Title: "5. Comparação de Benefícios das Subscrições",
    sec5ThFeature: "Funcionalidade",
    sec5ThFree: "Plano Grátis",
    sec5ThPro: "Plano Pro",
    sec5ThPrem: "Plano Premium",
    sec5Feat1Name: "Anúncios",
    sec5Feat1Free: "Contém Anúncios",
    sec5Feat1Pro: "Sem Anúncios",
    sec5Feat1Prem: "Sem Anúncios",
    sec5Feat2Name: "Contactos de Emergência",
    sec5Feat2Free: "1 Contacto",
    sec5Feat2Pro: "3 Contactos",
    sec5Feat2Prem: "5 Contactos",
    sec5Feat3Name: "Criação de Diários",
    sec5Feat3Free: "Apenas se \"Não estiver bem\"",
    sec5Feat3Pro: "Apenas se \"Não estiver bem\"",
    sec5Feat3Prem: "TODOS os estados (incluindo \"Estou bem\")",
    sec5Feat4Name: "Terapeuta com IA",
    sec5Feat4Free: "Não disponível",
    sec5Feat4Pro: "Não disponível",
    sec5Feat4Prem: "2 sessões por dia",
    sec5Feat5Name: "Seguir Diários de Amigos",
    sec5Feat5Free: "1 amigo (com anúncios)",
    sec5Feat5Pro: "Até 3 amigos",
    sec5Feat5Prem: "Até 10 amigos",
    
    sec6Title: "6. Dúvidas de Faturação e Apoio",
    sec6Desc: "Para questões gerais de faturação ou assistência na sincronização da conta, entre em contacto com a nossa equipa de apoio em:",
    footerRights: "© 2026 Are You Okay? Team. Todos os direitos reservados."
  },
  hi: {
    title: "भुगतान और बिलिंग नीति",
    lastUpdated: "अंतिम अपडेट: 26 मई, 2026",
    backHome: "← मुख्य पृष्ठ पर जाएं",
    sec1Title: "1. सुरक्षित इन-ऐप खरीदारी",
    sec1Desc1: "हम Pro-plan और Premium-plan सदस्यता स्तरों के माध्यम से उन्नत सुविधाएँ प्रदान करते हैं। सभी भुगतान, लेनदेन, इन-ऐप खरीदारी और ऑटो-नवीकरणीय सदस्यताएँ निम्नलिखित के माध्यम से सुरक्षित रूप से प्रबंधित, संसाधित और सत्यापित की जाती हैं:",
    sec1Bullet1: "Apple App Store: iOS डिवाइस उपयोगकर्ताओं के लिए।",
    sec1Bullet2: "Google Play Store: Android डिवाइस उपयोगकर्ताओं के लिए।",
    sec1Desc2: "हम सर्वर-साइड सदस्यता स्थिति जांच को संभालने के लिए उद्योग-अग्रणी RevenueCat SDK का उपयोग करते हैं, जिससे यह सुनिश्चित होता है कि आपकी खरीदारी की स्थिति सुरक्षित रूप से सत्यापित और आपके खाते में सिंक है।",
    
    sec2Title: "2. ऑटो-नवीकरणीय सदस्यता",
    sec2Desc: "हमारी सदस्यता पैकेज (Pro और Premium) मासिक या वार्षिक आधार पर पेश किए जाते हैं:",
    sec2Bullet1: "बिलिंग अवधि: सदस्यता शुल्क आपकी खरीद की पुष्टि के तुरंत बाद आपके Apple iTunes खाते या Google Play Store खाते में बिल किए जाते हैं।",
    sec2Bullet2: "स्वचालित नवीनीकरण: आपकी सदस्यता बिलिंग चक्र (मासिक या वार्षिक) के अंत में स्वचालित रूप से नवीनीकृत हो जाएगी जब तक कि वर्तमान सदस्यता अवधि की समाप्ति से कम से कम 24 घंटे पहले ऑटो-रिन्यू बंद न कर दिया जाए।",
    sec2Bullet3: "नवीनीकरण के लिए खाता शुल्क: वर्तमान अवधि के अंत से 24 घंटे के भीतर आपके खाते से समान सदस्यता दर पर नवीनीकरण शुल्क लिया जाएगा।",
    sec2Bullet4: "सक्रिय अवधि रद्दीकरण: सक्रिय सदस्यता अवधि के दौरान वर्तमान सदस्यता को रद्द करने की अनुमति नहीं है। यदि आप रद्द करते हैं, तो बिलिंग चक्र समाप्त होने तक आपके लाभ सक्रिय रहेंगे।",
    sec2Bullet5: "निःशुल्क परीक्षण शर्तें: निःशुल्क परीक्षण अवधि का कोई भी अप्रयुक्त हिस्सा, यदि दिया गया है, तो आपके द्वारा उस स्तर की सदस्यता खरीदने पर जब्त कर लिया जाएगा, जहां लागू हो।",
    
    sec3Title: "3. रद्दीकरण नीति",
    sec3Desc: "आप किसी भी समय अपनी सदस्यता का प्रबंधन और रद्दीकरण करने के लिए स्वतंत्र हैं। सक्रिय सदस्यताओं को खरीद के बाद संबंधित ऐप स्टोर में अपनी खाता सेटिंग पर जाकर आसानी से प्रबंधित किया जा सकता है:",
    sec3Bullet1: "iOS उपयोगकर्ताओं के लिए: iPhone सेटिंग्स > [आपका नाम] > सदस्यताएँ > \"Are You Okay?\" चुनें > सदस्यता रद्द करें पर जाएं।",
    sec3Bullet2: "Android उपयोगकर्ताओं के लिए: Google Play Store खोलें > प्रोफ़ाइल आइकन पर टैप करें > भुगतान और सदस्यताएँ > सदस्यताएँ > \"Are You Okay?\" चुनें > सदस्यता रद्द करें पर टैप करें।",
    sec3Desc2: "यदि आप रद्द करते हैं, तो आपके सक्रिय सदस्यता लाभ आपके वर्तमान बिलिंग चक्र के अंत तक पूरी तरह से कार्यशील रहेंगे।",
    
    sec4Title: "4. धनवापसी (Refund) नीति",
    sec4Desc: "चूंकि सभी भुगतान और सदस्यता बिल सीधे Apple और Google द्वारा संसाधित किए जाते हैं, हम आपके क्रेडिट कार्ड के विवरण को हमारे सर्वर पर संग्रहीत नहीं करते हैं, और न ही हमारे पास सीधे बिलिंग धनवापसी जारी करने का प्रशासनिक अधिकार है। सभी धनवापसी दावों और विवादों को सीधे स्टोर ऑपरेटर को संबोधित किया जाना चाहिए:",
    sec4Bullet1: "iOS रिफंड के लिए अनुरोध: कृपया Apple के सहायता पोर्टल https://reportaproblem.apple.com पर जाएं।",
    sec4Bullet2: "Android रिफंड के लिए अनुरोध: कृपया Google Play रिफंड सपोर्ट पर जाएं।",
    
    sec5Title: "5. सदस्यता स्तर और लाभ तुलना",
    sec5ThFeature: "सुविधा",
    sec5ThFree: "फ्री-प्लान",
    sec5ThPro: "प्रो-प्लान",
    sec5ThPrem: "प्रीमियम-प्लान",
    sec5Feat1Name: "विज्ञापन अनुभव",
    sec5Feat1Free: "विज्ञापन शामिल हैं",
    sec5Feat1Pro: "कोई विज्ञापन नहीं",
    sec5Feat1Prem: "कोई विज्ञापन नहीं",
    sec5Feat2Name: "आपातकालीन संपर्क",
    sec5Feat2Free: "1 संपर्क",
    sec5Feat2Pro: "3 संपर्क",
    sec5Feat2Prem: "5 संपर्क",
    sec5Feat3Name: "जर्नल प्रविष्टियां",
    sec5Feat3Free: "केवल जब \"ठीक नहीं हूँ\"",
    sec5Feat3Pro: "केवल जब \"ठीक नहीं हूँ\"",
    sec5Feat3Prem: "सभी मूड ( \"ठीक हूँ\" सहित )",
    sec5Feat4Name: "AI मनोवैज्ञानिक काउंसलर",
    sec5Feat4Free: "अनुपलब्ध",
    sec5Feat4Pro: "अनुपलब्ध",
    sec5Feat4Prem: "प्रतिदिन 2 सत्र",
    sec5Feat5Name: "मित्रों के जर्नल फ़ॉलो करें",
    sec5Feat5Free: "1 मित्र (विज्ञापनों के साथ)",
    sec5Feat5Pro: "3 मित्र",
    sec5Feat5Prem: "10 मित्रों तक",
    
    sec6Title: "6. बिलिंग प्रश्न और सहायता",
    sec6Desc: "सामान्य बिलिंग प्रश्नों या खाता सिंक्रनाइज़ेशन में सहायता के लिए, कृपया हमारी सहायता टीम से संपर्क करें:",
    footerRights: "© 2026 Are You Okay? टीम। सर्वाधिकार सुरक्षित।"
  },
  id: {
    title: "Kebijakan Pembayaran & Penagihan",
    lastUpdated: "Terakhir Diperbarui: 26 Mei 2026",
    backHome: "← Kembali ke Beranda",
    sec1Title: "1. Pembelian Dalam Aplikasi yang Aman",
    sec1Desc1: "Kami menawarkan fitur lanjutan melalui paket langganan Pro dan Premium. Semua pembayaran, transaksi, pembelian dalam aplikasi, dan langganan perpanjangan otomatis dikelola, diproses, dan diverifikasi secara aman melalui:",
    sec1Bullet1: "Apple App Store: Untuk pengguna perangkat iOS.",
    sec1Bullet2: "Google Play Store: Untuk pengguna perangkat Android.",
    sec1Desc2: "Kami menggunakan RevenueCat SDK yang terdepan di industri untuk menangani pemeriksaan status langganan di sisi server, memastikan status pembelian Anda diverifikasi dan disinkronkan ke seluruh akun Anda dengan aman.",
    
    sec2Title: "2. Langganan Perpanjangan Otomatis",
    sec2Desc: "Paket langganan kami (Pro dan Premium) ditawarkan berdasarkan basis bulanan atau tahunan:",
    sec2Bullet1: "Periode Penagihan: Biaya langganan akan segera ditagihkan ke Akun iTunes Apple atau Akun Google Play Store Anda setelah konfirmasi pembelian.",
    sec2Bullet2: "Perpanjangan Otomatis: Langganan Anda akan diperpanjang secara otomatis di akhir siklus penagihan (bulanan atau tahunan) kecuali perpanjangan otomatis dimatikan setidaknya 24 jam sebelum akhir periode langganan saat ini.",
    sec2Bullet3: "Biaya Perpanjangan Akun: Akun Anda akan dikenakan biaya perpanjangan dengan tarif langganan yang sama dalam waktu 24 jam sebelum akhir periode berjalan.",
    sec2Bullet4: "Pembatalan Periode Aktif: Pembatalan langganan berjalan tidak diizinkan selama periode langganan sedang aktif. Jika Anda membatalkan, manfaat langganan tetap aktif hingga siklus penagihan berakhir.",
    sec2Bullet5: "Ketentuan Uji Coba Gratis: Setiap bagian yang tidak terpakai dari periode uji coba gratis, jika ditawarkan, akan hangus saat Anda membeli langganan paket tersebut, jika berlaku.",
    
    sec3Title: "3. Kebijakan Pembatalan",
    sec3Desc: "Anda bebas mengelola dan membatalkan langganan Anda kapan saja. Langganan aktif dapat dengan mudah dikelola dengan mengunjungi pengaturan akun Anda di toko aplikasi masing-masing setelah pembelian:",
    sec3Bullet1: "Untuk pengguna iOS: Buka Pengaturan iPhone > [Nama Anda] > Langganan > Pilih \"Are You Okay?\" > Batalkan Langganan.",
    sec3Bullet2: "Untuk pengguna Android: Buka Google Play Store > Ketuk Ikon Profil > Pembayaran & Langganan > Langganan > Pilih \"Are You Okay?\" > Batalkan Langganan.",
    sec3Desc2: "Jika Anda membatalkan, manfaat langganan aktif Anda akan tetap berfungsi penuh hingga akhir siklus penagihan saat ini.",
    
    sec4Title: "4. Kebijakan Pengembalian Dana",
    sec4Desc: "Karena semua pembayaran dan tagihan langganan diproses langsung oleh Apple dan Google, kami tidak menyimpan detail kartu kredit Anda di server kami, dan kami tidak memiliki wewenang administratif untuk mengeluarkan pengembalian dana penagihan secara langsung. Semua klaim pengembalian dana harus ditujukan langsung ke operator toko:",
    sec4Bullet1: "Meminta Pengembalian Dana iOS: Silakan kunjungi portal dukungan Apple di https://reportaproblem.apple.com.",
    sec4Bullet2: "Meminta Pengembalian Dana Android: Silakan kunjungi dukungan pengembalian dana Google Play.",
    
    sec5Title: "5. Perbandingan Manfaat Tingkat Langganan",
    sec5ThFeature: "Fitur",
    sec5ThFree: "Paket Gratis",
    sec5ThPro: "Paket Pro",
    sec5ThPrem: "Paket Premium",
    sec5Feat1Name: "Pengalaman Iklan",
    sec5Feat1Free: "Mengandung Iklan",
    sec5Feat1Pro: "Tanpa Iklan",
    sec5Feat1Prem: "Tanpa Iklan",
    sec5Feat2Name: "Kontak Darurat",
    sec5Feat2Free: "1 Kontak",
    sec5Feat2Pro: "3 Kontak",
    sec5Feat2Prem: "5 Kontak",
    sec5Feat3Name: "Pencatatan Jurnal",
    sec5Feat3Free: "Hanya saat \"Tidak Baik\"",
    sec5Feat3Pro: "Hanya saat \"Tidak Baik\"",
    sec5Feat3Prem: "SEMUA Suasana Hati (termasuk \"Baik-Baik Saja\")",
    sec5Feat4Name: "Konselor Psikolog AI",
    sec5Feat4Free: "Tidak Tersedia",
    sec5Feat4Pro: "Tidak Tersedia",
    sec5Feat4Prem: "2 sesi / hari",
    sec5Feat5Name: "Mengikuti Jurnal Teman",
    sec5Feat5Free: "1 teman (dengan Iklan)",
    sec5Feat5Pro: "Hingga 3 teman",
    sec5Feat5Prem: "Hingga 10 teman",
    
    sec6Title: "6. Pertanyaan Penagihan & Dukungan",
    sec6Desc: "Untuk pertanyaan penagihan umum atau bantuan sinkronisasi akun, silakan hubungi tim dukungan kami di:",
    footerRights: "© 2026 Are You Okay? Team. Semua hak dilindungi undang-undang."
  }
};

export default function PaymentPolicy() {
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang && LOCALES[urlLang]) {
        setLang(urlLang);
        return;
      }
      
      const browserLang = navigator.language.split("-")[0];
      if (LOCALES[browserLang]) {
        setLang(browserLang);
      }
    }
  }, []);

  const t = LOCALES[lang] || LOCALES.en;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white py-16 px-6 relative overflow-x-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-900 pb-8">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-slate-400 group-hover:text-white transition-colors">
              {t.backHome}
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {/* Glassmorphic Language Selector Dropdown */}
            <div className="relative">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="appearance-none bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 hover:border-blue-500 hover:text-white transition-all rounded-full px-4 py-2 pr-8 cursor-pointer active:scale-95 outline-none"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code} className="bg-slate-950 text-slate-100 font-sans">
                    {l.flag} {l.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-blue-400/80">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💙</span>
              <span className="font-extrabold text-sm text-white">Are You Okay?</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-white tracking-tight leading-tight">{t.title}</h1>
          <p className="text-sm text-slate-500 font-mono">{t.lastUpdated}</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">{t.sec1Title}</h2>
            <p>{t.sec1Desc1}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t.sec1Bullet1}</li>
              <li>{t.sec1Bullet2}</li>
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t.sec1Desc2.replace("RevenueCat SDK", "<strong>RevenueCat SDK</strong>") }} />
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">{t.sec2Title}</h2>
            <p>{t.sec2Desc}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t.sec2Bullet1}</li>
              <li>{t.sec2Bullet2}</li>
              <li>{t.sec2Bullet3}</li>
              <li>{t.sec2Bullet4}</li>
              <li>{t.sec2Bullet5}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">{t.sec3Title}</h2>
            <p>{t.sec3Desc}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t.sec3Bullet1}</li>
              <li>{t.sec3Bullet2}</li>
            </ul>
            <p>{t.sec3Desc2}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">{t.sec4Title}</h2>
            <p>{t.sec4Desc}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {t.sec4Bullet1.includes("https://") ? (
                  <>
                    {t.sec4Bullet1.split("https://")[0]}
                    <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      https://reportaproblem.apple.com
                    </a>
                  </>
                ) : (
                  t.sec4Bullet1
                )}
              </li>
              <li>
                {t.sec4Bullet2.includes("Google Play") ? (
                  <>
                    {t.sec4Bullet2.split("Google Play")[0]}
                    <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      Google Play
                    </a>{" "}
                    {t.sec4Bullet2.split("Google Play")[1]}
                  </>
                ) : (
                  t.sec4Bullet2
                )}
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">{t.sec5Title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-900 text-left text-xs text-slate-400">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="border border-slate-900 p-3">{t.sec5ThFeature}</th>
                    <th className="border border-slate-900 p-3">{t.sec5ThFree}</th>
                    <th className="border border-slate-900 p-3">{t.sec5ThPro}</th>
                    <th className="border border-slate-900 p-3">{t.sec5ThPrem}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-slate-900">
                    <td className="border border-slate-900 p-3 font-semibold text-white">{t.sec5Feat1Name}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat1Free}</td>
                    <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">{t.sec5Feat1Pro}</td>
                    <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">{t.sec5Feat1Prem}</td>
                  </tr>
                  <tr className="border border-slate-900">
                    <td className="border border-slate-900 p-3 font-semibold text-white">{t.sec5Feat2Name}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat2Free}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat2Pro}</td>
                    <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">{t.sec5Feat2Prem}</td>
                  </tr>
                  <tr className="border border-slate-900">
                    <td className="border border-slate-900 p-3 font-semibold text-white">{t.sec5Feat3Name}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat3Free}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat3Pro}</td>
                    <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">{t.sec5Feat3Prem}</td>
                  </tr>
                  <tr className="border border-slate-900">
                    <td className="border border-slate-900 p-3 font-semibold text-white">{t.sec5Feat4Name}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat4Free}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat4Pro}</td>
                    <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">{t.sec5Feat4Prem}</td>
                  </tr>
                  <tr className="border border-slate-900">
                    <td className="border border-slate-900 p-3 font-semibold text-white">{t.sec5Feat5Name}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat5Free}</td>
                    <td className="border border-slate-900 p-3">{t.sec5Feat5Pro}</td>
                    <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">{t.sec5Feat5Prem}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">{t.sec6Title}</h2>
            <p>{t.sec6Desc}</p>
            <p className="font-semibold text-blue-400 mt-2">
              Email: loverhide.blog@gmail.com
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-600">
          <p>{t.footerRights}</p>
        </div>
      </div>
    </div>
  );
}
