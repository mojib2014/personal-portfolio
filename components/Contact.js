import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/Contact.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .label("Email"),
  subject: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .label("Subject"),
  message: Yup.string()
    .min(50, "Too Short!")
    .max(150, "Too Long!")
    .label("Message"),
});

export default function Contact() {
  return (
    <section id="contact">
      <div className={styles.contactOuter}>
        <div className="container mx-w-xl">
          <h2 className="font-bold xl:text-5xl text-4xl text-center mb-20">
            Contact Section
          </h2>
          <div className="contact w-[70%] m-auto">
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting }) => {
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
                    className="w-[100%] py-3 px-2 rounded-full border-2 border-sky-500 my-5 focus:border-sky-200"
                    placeholder="Name: "
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red bg-red"
                  />
                  <Field
                    type="email"
                    name="email"
                    className="w-[100%] py-3 px-2 rounded-full border-2 border-sky-500 my-5"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red"
                  />
                  <Field
                    type="subject"
                    name="subject"
                    className="w-[100%] py-3 px-2 rounded-full border-2 border-sky-500 my-5"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red"
                  />
                  <Field
                    type="message"
                    name="message"
                    as="textarea"
                    className="w-[100%] py-3 px-2 rounded-md border-2 border-sky-500 my-5"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-dodgerblue border-2 border-dodgerblue rounded-md "
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
