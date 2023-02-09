import { Formik, Field } from "formik";
import PublicLayout from "layouts/public.layout";
import InputGroup from "components/InputGroup";
import Button from "components/Button";
import TextInput from "components/TextInput";
import kiwifyLogo from "assets/images/kiwify-green-logo.png";
import schema from "./schema.validation";

const Login = () => {
  return (
    <PublicLayout>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img alt="logo" src={kiwifyLogo} className="mx-auto h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou&nbsp;
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none hover:underline transition ease-in-out duration-150"
          >
            fazer cadastro
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Formik initialValues={{
          email: '',
          password: ''
        }}
          validationSchema={schema}
          validateOnBlur={true}
          validateOnChange={false}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}>
          {({ isSubmitting, handleSubmit, touched, errors }) => (

            <form onSubmit={handleSubmit} className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <InputGroup>
                <InputGroup.Label for="email">email</InputGroup.Label>                
                <Field name="email">
                  {({ field }) => (
                    <>
                      <TextInput
                        type="email"
                        errors={touched.email && errors.email}
                        {...field} />
                      {touched.email && errors.email && (
                        <div className="text-red-500 text-xs mt-1">
                          {errors?.email}
                        </div>
                      )}
                    </>
                  )}
                </Field>
              </InputGroup>
              <InputGroup styles="mt-6">
                <InputGroup.Label>password</InputGroup.Label>
                <Field name="password">
                  {({ field }) => (
                    <>
                      <TextInput
                        type="password"
                        errors={touched.password && errors.password}
                        {...field} />
                      {touched.password && errors.password && (
                        <div className="text-red-500 text-xs mt-1">
                          {errors?.password}
                        </div>
                      )}
                    </>
                  )}
                </Field>
              </InputGroup>
              <div className="mt-2 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <InputGroup styles="mt-6">
                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={isSubmitting}>
                    Entrar
                </Button>
              </InputGroup>
            </form>

          )}
        </Formik>
      </div>
    </PublicLayout>
  );
};

export default Login;
