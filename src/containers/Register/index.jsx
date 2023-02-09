import { Formik, Field } from "formik";
import PublicLayout from "layouts/public.layout";
import InputGroup from "components/InputGroup";
import Button from "components/Button";
import TextInput from "components/TextInput";
import kiwifyLogo from "assets/images/kiwify-green-logo.png";
import schema from "./schema.validation";

const Register = () => {
  return (
    <PublicLayout>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img alt="logo" src={kiwifyLogo} className="mx-auto h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou&nbsp;&nbsp;
          <a
            href="/"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none hover:underline transition ease-in-out duration-150"
          >
            entrar na sua conta existente
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Formik
          initialValues={{
            email: "",
            emailConfirmation: "",
            password: "",
          }}
          validationSchema={schema}
          validateOnBlur={true}
          validateOnChange={false}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);           
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, handleSubmit, touched, errors }) => (
            <form onSubmit={handleSubmit} className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <InputGroup>
                <InputGroup.Label for="E-mail">E-mail</InputGroup.Label>

                <Field name="email">
                  {({ field }) => (
                    <>
                      <TextInput
                        type="email"                        
                        errors={touched.email && errors.email}
                        {...field}
                      />
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
                <InputGroup.Label for="E-mail">Repetir e-mail</InputGroup.Label>

                <Field name="emailConfirmation">
                  {({ field }) => (
                    <>
                      <TextInput
                        type="email"
                        errors={touched.emailConfirmation && errors?.emailConfirmation}
                        {...field}
                      />
                      {touched.emailConfirmation && errors.emailConfirmation && (
                        <div className="text-red-500 text-xs mt-1">
                          {errors.emailConfirmation}
                        </div>
                      )}
                    </>
                  )}
                </Field>

              </InputGroup>
              <InputGroup styles="mt-6">
                <InputGroup.Label>Senha</InputGroup.Label>
                <Field name="password">
                  {({ field }) => (
                    <>
                      <TextInput
                        type="password"
                        errors={touched.password && errors.password}
                        {...field}
                      />
                      {touched.password && errors.password && (
                        <div className="text-red-500 text-xs mt-1">
                          {errors.password}
                        </div>
                      )}
                    </>
                  )}
                </Field>                
              </InputGroup>
              <InputGroup styles="mt-6">
                <label className="relative flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                    />
                  </div>
                  <div className="ml-2 text-sm leading-5">
                    <span className="font-medium text-gray-700">
                      Eu li e aceito os{" "}
                      <a
                        href="https://kiwify.com.br/termos-de-uso"
                        target="_blank"
                        className="underline"
                        rel="noreferrer"
                      >
                        {" "}
                        termos de uso
                      </a>
                      ,{" "}
                      <a
                        href="https://kiwify.com.br/licenca-de-uso-software"
                        target="_blank"
                        className="underline"
                        rel="noreferrer"
                      >
                        {" "}
                        termos de licença de uso de software
                      </a>
                      ,{" "}
                      <a
                        href="https://kiwify.com.br/politica-de-conteudo"
                        target="_blank"
                        className="underline"
                        rel="noreferrer"
                      >
                        política de conteúdo
                      </a>{" "}
                      da Kiwify{" "}
                    </span>
                  </div>
                </label>
              </InputGroup>
              <div className="mt-2 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <a
                    href="/ResetPassword"
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
                  Criar conta
                </Button>
              </InputGroup>
            </form>
          )}
        </Formik>
      </div>
    </PublicLayout>
  );
};

export default Register;
