import React from "react";
import { Form, Input, Button, Space } from "antd";
import { sendTelegramMessage } from "../../api/sendTelegram";
import {
  FaTelegramPlane,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [form] = Form.useForm();

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

  const onFinish = async (values) => {
    console.log("Yuborilgan ma'lumotlar:", values);

    await sendTelegramMessage(values);

    form.resetFields();
  };

  return (
    <section id="contact" className="contact container">
      <div className="contact-card left-card">
        <h2 className="section__title">Biz bilan bog‘laning</h2>

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Ismingiz"
            rules={[{ required: true, message: "Ismingizni kiriting!" }]}
          >
            <Input placeholder="Ismingiz" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Telefon raqami"
            rules={[{ required: true, message: "Telefon raqam kiriting!" }]}
          >
            <Input placeholder="+998 90 123 45 67" />
          </Form.Item>

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

      <aside className="contact-card right-card">
        <h3>Ofis manzili</h3>

        <p className="muted contact-links">
          <FaMapMarkerAlt /> 1-дом, Чопон ота, Lutfi Street, 100173, Tashkent,
          Узбекистан
          <br />
          <a href="tel:+998909870987">
            <FaPhoneAlt /> +998 90 987 09 87
          </a>
          <br />
          <a href="mailto:AURUM_AVIA@MAIL.RU">
            <FaEnvelope /> AURUM_AVIA@MAIL.RU
          </a>
        </p>

        <h3>Ijtimoiy tarmoqlar</h3>
        <div className="social-icons">
          <a href="https://t.me/adkhamov_987" target="_blank">
            <FaTelegramPlane />
          </a>
          <a href="https://instagram.com/aurum_avia" target="_blank">
            <FaInstagram />
          </a>
        </div>

        <h3>Lokatsiya</h3>

        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11991.328063660161!2d69.18234070214042!3d41.29076031283652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1saviakassa!5e0!3m2!1sru!2s!4v1764925698087!5m2!1sru!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        
      </aside>
    </section>
  );
}
