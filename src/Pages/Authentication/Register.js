import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/AuthSlice";

const signUpSchema = z
  .object({
    FirstName: z.string().min(1, { message: "FirstName is required" }),
    LastName: z.string().min(1, { message: "LastName is required" }),
    Email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "That is not an email" }),
    Password: z
      .string()
      .min(8, {
        message: "Password is too short:(should at least be 8 characters long)",
      })
      .regex(/.*[!@#$%^&*()_+{}:";'<>?,.].*/, {
        message: "Password should contain at least one special character",
      }),
    ConfirmPassword: z.string().min(8, {
      message:
        "Confirm password is too short: (should at least be 8 characters long)",
    }),
  })
  .refine((input) => input.Password === input.ConfirmPassword, {
    message: "The two passwords do not match",
    path: ["ConfirmPassword"],
  });

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(
      registerUser({
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email,
        Password: data.Password,
      })
    );
    navigate("/");
  };

  return (
    <Row className="my-5 m-0">
      <Col md={{ span: 4, offset: 4 }}>
        <Card
          style={{
            borderColor: "#2169da",
            borderWidth: "1px",
            borderRadius: "20px",
          }}
        >
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 my-3 ">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("FirstName")}
                    isInvalid={!!errors.FirstName?.message}
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.FirstName?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("LastName")}
                    isInvalid={!!errors.LastName?.message}
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.LastName?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("Email")}
                    isInvalid={!!errors.Email?.message}
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("Password")}
                    isInvalid={!!errors.Password?.message}
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Password?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("ConfirmPassword")}
                    isInvalid={!!errors.ConfirmPassword?.message}
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.ConfirmPassword?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="mb-3 w-100"
                  style={{ backgroundColor: "#272727", borderColor: "#272727" }}
                >
                  Submit
                </Button>
              </Form>
              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <Link to="/Login" style={{ color: "#2169da" }}>
                    Login
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
