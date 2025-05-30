// [문제] in 패턴: 알림(Notification) 객체 타입 분기
// 이메일/문자/푸시알림 타입별로 메시지 출력

type EmailNotifications = { to: string; subject: string; body: string };
type SmsNotifications = { phone: string; message: string };
type PushNotifications = { deviceId: string; alert: string };

type Notifications = EmailNotifications | SmsNotifications | PushNotifications;

function sendNotification(notif: Notifications) {
  if ("to" in notif) {
    console.log(
      `이메일 알림: ${notif.to}에게 "${notif.subject}" 제목으로 전송`
    );
    console.log(notif.body);
  } else if ("phone" in notif) {
    console.log(`문자 알림: ${notif.phone}으로 "${notif.message}" 전송`);
  } else if ("deviceId" in notif) {
    console.log(`푸시 알림: ${notif.deviceId}에 "${notif.alert}" 전송`);
  }
}

// 사용 예시
sendNotification({ to: "a@b.com", subject: "Hi", body: "내용" });
sendNotification({ phone: "010-1234-5678", message: "문자" });
sendNotification({ deviceId: "xyz", alert: "푸시" });
