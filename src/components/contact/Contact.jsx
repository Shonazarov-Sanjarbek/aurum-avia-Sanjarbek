import React from "react";
import { Form, Input, Button, Space } from "antd";
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form] = Form.useForm();

  // Submit disable bo'lishi
  const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);

    React.useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        {children}
      </Button>
    );
  };

  const onFinish = (values) => {
    console.log("Yuborilgan ma'lumotlar:", values);
  };

  return (
    <section id="contact" className="contact container">
      
      {/* LEFT — FORM */}
      <div className="contact-card left-card">
        <h2 className="section__title">Biz bilan bog‘laning</h2>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="contact-form"
        >
          {/* Name */}
          <Form.Item
            name="name"
            label="Ismingiz"
            rules={[{ required: true, message: "Ismingizni kiriting!" }]}
          >
            <Input placeholder="Ismingiz" />
          </Form.Item>

          {/* Phone */}
          <Form.Item
            name="phone"
            label="Telefon raqami"
            rules={[{ required: true, message: "Telefon raqam kiriting!" }]}
          >
            <Input placeholder="+998 90 123 45 67" />
          </Form.Item>

          {/* Message */}
          <Form.Item
            name="message"
            label="Xabar"
            rules={[{ required: true, message: "Xabar yozing!" }]}
          >
            <Input.TextArea rows={4} placeholder="Xabaringizni yozing..." />
          </Form.Item>

          <Form.Item>
            <Space>
              <SubmitButton form={form}>Yuborish</SubmitButton>
              <Button htmlType="reset">Tozalash</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>

      {/* RIGHT — INFO */}
      <aside className="contact-card right-card">

  <h3>Ofis manzili</h3>

  <p className="muted contact-links">
    <FaMapMarkerAlt /> Toshkent, Uzbekistan  
    <br />

    <a href="tel:+998909870987">
      <FaPhoneAlt /> +998 90 987 09 87
    </a>
    <br />

    <a href="mailto:support@aerobox.uz">
        
      <FaEnvelope /> support@aerobox.uz
    </a>
  </p>

  <h3>Ijtimoiy tarmoqlar</h3>

  <div className="social-icons">
    <a href="https://t.me/YOUR_TELEGRAM" target="_blank">
      <FaTelegramPlane />
    </a>
    <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank">
      <FaInstagram />
    </a>
    <a href="https://facebook.com/YOUR_FACEBOOK" target="_blank">
      <FaFacebookF />
    </a>
  </div>

  <h3>Lokatsiya</h3>

  <iframe
    className="google-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5589736283003!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2fbbbbb!2sTashkent!5e0!3m2!1suz!2s!4v00000000"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</aside>
    </section>
  );
}
