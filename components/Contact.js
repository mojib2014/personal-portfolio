import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/Contact.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Name is Required Feild")
    .label("Name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required Feild")
    .label("Email"),
  subject: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .label("Subject"),
  message: Yup.string()
    .min(50, "Too Short!")
    .max(150, "Too Long!")
    .label("Message"),
});

export default function Contact() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <section id="contact">
      <div className="py-[120px] bg-lime-50">
        <div className="container mx-w-xl">
          <h2 className="font-bold xl:text-5xl text-4xl text-center mb-20">
            Contact Section
          </h2>
          <div className="w-[100%] md:w-[70%] m-auto">
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col items-center justify-center">
                  <Field
                    type="name"
                    name="name"
                    className="w-[100%] py-3 px-2 rounded-full border-2 border-sky-500 my-5 focus:border-green-500 outline-0"
                    placeholder="Name: John Doe"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red"
                  />
                  <Field
                    type="email"
                    name="email"
                    className="w-[100%] py-3 px-2 rounded-full border-2 border-sky-500 my-5 focus:border-green-500 outline-0"
                    placeholder="Email: yourdomain@email.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red"
                  />
                  <Field
                    type="subject"
                    name="subject"
                    className="w-[100%] py-3 px-2 rounded-full border-2 border-sky-500 my-5 focus:border-green-500 outline-0"
                    placeholder="Subject: max 50 charactars"
                  />
                  <Field
                    type="message"
                    name="message"
                    as="textarea"
                    cols="10"
                    rows="8"
                    className="w-[100%] py-3 px-2 rounded-md border-2 border-sky-500 my-5 focus:border-green-500 outline-0"
                    placeholder="Message: max 150 charactars"
                  />
                  <input
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitBtn}
                    value="Submit"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
