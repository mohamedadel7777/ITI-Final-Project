import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/AuthSlice";
import { useDispatch } from "react-redux";

// Define the schema for login validation with only email and password
const loginSchema = z.object({
  Email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  Password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(loginUser(data)).unwrap();
      if (result) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("please check your email and password");
    }
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
                <Form.Group className="mb-3 my-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    {...register("Email")}
                    isInvalid={!!errors.Email?.message}
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    size="lg"
                    type="password"
                    {...register("Password")}
                    isInvalid={!!errors.Password?.message}
                    className="w-100"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Password?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="mb-3 w-100"
                  style={{ backgroundColor: "#272727", borderColor: "#272727" }}
                >
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <p>
                  Don't have an account?{" "}
                  <Link to="/Register" style={{ color: "#2169da" }}>
                    Sign Up
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

export default Login;
