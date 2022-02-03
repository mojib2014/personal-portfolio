import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/Contact.module.css";
import SectionContainer from "./SectionContainer";

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
    <section
      id="contact"
      className="dark:text-gray-100 bg-gradient-to-bl from-sky-300 dark:from-gray-500 py-section-y"
    >
      <SectionContainer>
        <h2 className="text-3xl text-center font-bold sm:text-4xl xl:text-5xl mb-12">
          Contact Section
        </h2>
        <div className="w-full m-auto">
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
              <Form className="flex flex-col items-center justify-center max-w-3xl m-auto">
                <Field
                  type="name"
                  name="name"
                  className="form-input dark:bg-gray-700 w-full py-3 px-2 outline-0 rounded-lg border-2 border-sky-500 mt-4 focus:border-pink-400"
                  placeholder="Name: John Doe"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger-500 self-start"
                />
                <Field
                  type="email"
                  name="email"
                  className="form-input dark:bg-gray-700 w-full py-3 px-2 outline-0 rounded-lg border-2 border-sky-500 mt-4 focus:border-pink-400"
                  placeholder="Email: yourdomain@email.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger-500 self-start"
                />
                <Field
                  type="subject"
                  name="subject"
                  className="form-input dark:bg-gray-700 w-full py-3 px-2 outline-0 rounded-lg border-2 border-sky-500 mt-4 focus:border-pink-400"
                  placeholder="Subject: max 50 charactars"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-danger-500 self-start"
                />
                <Field
                  type="message"
                  name="message"
                  as="textarea"
                  cols="10"
                  rows="5"
                  className="form-textarea dark:bg-gray-700 w-full py-3 px-2 outline-0 rounded-lg border-2 border-sky-500 mt-4 focus:border-pink-400"
                  placeholder="Message: max 150 charactars"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-danger-500 self-start"
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
      </SectionContainer>
    </section>
  );
}
