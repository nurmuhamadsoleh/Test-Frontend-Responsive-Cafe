import { Button, Form as FormANTD } from "antd";
import { Field, Form } from "react-final-form";

import Image from "next/image";
import Input from "component/Input";
import LoginValidation from "../Validation/LoginValidation";
import Logo from "../../../assets/images/logo technopartner.png";
import React from "react";

interface IProps {
  handleSubmit: () => void;
}

export default function LoginComponent(props: IProps) {
  const { handleSubmit } = props;
  return (
    <>
      <div className="w-full">
        <div className="-mt-10 text-center">
          <Image src={Logo} className="w-[350px] object-contain" alt="Logo" />
        </div>
        <main className="-mt-28 w-[50%] mx-auto">
          <Form onSubmit={handleSubmit} validate={LoginValidation}>
            {(formProps) => {
              const { handleSubmit, invalid, dirty } = formProps;
              return (
                <FormANTD layout="vertical" onFinish={handleSubmit}>
                  <div className="text-center">
                    <span className="font-medium text-gray-500">Email</span>
                    <Field
                      name="Email"
                      component={Input}
                      isFormItem
                      className="w-[100%] bg-white text-black lg:w-1/3"
                      placeholder="Masukan Email Anda"
                      showError={dirty}
                    />
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-gray-500">Password</span>
                    <Field
                      name="Password"
                      component={Input}
                      isFormItem
                      className="w-[100%] bg-white text-black lg:w-1/3"
                      placeholder="Masukan Password Anda"
                      showError={dirty}
                      isPassword
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      className="bg-white text-black font-medium w-40"
                      htmlType="submit"
                      disabled={invalid}
                    >
                      Login
                    </Button>
                  </div>
                </FormANTD>
              );
            }}
          </Form>
        </main>
      </div>
    </>
  );
}
