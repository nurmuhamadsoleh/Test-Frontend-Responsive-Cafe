export default function LoginValidation(values: any) {
  const error: any = {};
  const { Email, Password } = values;
  if (!Email) {
    error.Email = <div className="text-xs">Email harus di isi.</div>;
  }
  if (!Password) {
    error.Password = <div className="text-xs">Password harus di isi.</div>;
  }
  return error;
}
