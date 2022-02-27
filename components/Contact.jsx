import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import SectionContainer from './SectionContainer'
import styles from '@styles/Contact.module.css'

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Name is Required Feild')
    .label('Name'),
  email: Yup.string().email('Invalid email').required('Email is Required Feild').label('Email'),
  subject: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').label('Subject'),
  message: Yup.string().min(50, 'Too Short!').max(150, 'Too Long!').label('Message'),
})

export default function Contact() {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <section
      id="contact"
      className="pb-section-pb pt-section-pt dark:bg-[#111827] dark:text-gray-100"
    >
      <SectionContainer>
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl xl:text-5xl">Contact Me</h2>
        <div className="m-auto w-full">
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values)
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({ isSubmitting }) => (
              <Form className="m-auto flex max-w-3xl flex-col items-center justify-center">
                <Field
                  type="name"
                  name="name"
                  className="form-input mt-4 w-full rounded-lg border-2 border-sky-500 py-3 px-2 outline-0 focus:border-pink-400 dark:bg-gray-700"
                  placeholder="Name: John Doe"
                />
                <ErrorMessage name="name" component="div" className="self-start text-red-500" />
                <Field
                  type="email"
                  name="email"
                  className="form-input mt-4 w-full rounded-lg border-2 border-sky-500 py-3 px-2 outline-0 focus:border-pink-400 dark:bg-gray-700"
                  placeholder="Email: yourdomain@email.com"
                />
                <ErrorMessage name="email" component="div" className="self-start text-red-500" />
                <Field
                  type="subject"
                  name="subject"
                  className="form-input mt-4 w-full rounded-lg border-2 border-sky-500 py-3 px-2 outline-0 focus:border-pink-400 dark:bg-gray-700"
                  placeholder="Subject: max 50 charactars"
                />
                <ErrorMessage name="subject" component="div" className="self-start text-red-500" />
                <Field
                  type="message"
                  name="message"
                  as="textarea"
                  cols="10"
                  rows="5"
                  className="form-textarea mt-4 w-full rounded-lg border-2 border-sky-500 py-3 px-2 outline-0 focus:border-pink-400 dark:bg-gray-700"
                  placeholder="Message: max 150 charactars"
                />
                <ErrorMessage name="message" component="div" className="self-start text-red-500" />
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
  )
}
