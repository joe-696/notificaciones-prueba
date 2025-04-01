self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'https://i.ibb.co/yqrW8YM/image-removebg-preview-20.png',
    badge: '/path/to/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification('Notificación Push', options)
  );
});
