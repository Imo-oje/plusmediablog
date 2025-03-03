import zod from "zod";

class ValidatorClass {
  constructor() {
    this.registerSchema = zod.object({
      username: zod.string(),
      email: zod.string().email(),
      password: zod.string().min(6),
    });

    this.loginSchema = zod.object({
      email: zod.string().email(),
      password: zod.string(),
    });
  }

  validateLogin(data) {
    return this.loginSchema.parse(data);
  }

  validateRegister(data) {
    return this.registerSchema.parse({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  }
}

export default ValidatorClass;
