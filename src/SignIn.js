import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "メールアドレス:" +
        email +
        "\n" +
        "パスワード：" +
        password +
        "\n" +
        "ログイン情報保存：" +
        check
    );
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h1>HelloHello</h1>
          <h2>HelloHello</h2>
          <h3>HelloHello</h3>
          <h4>HelloHello</h4>
          <Typography variant="h4" sx={{ mt: 1, backgroundColor: "red" }}>
            ログイン画面
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="メールアドレス"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  value="remember"
                  color="primary"
                  checked={check}
                  onClick={() => setCheck(!check)}
                />
              }
              label="ログイン情報を保存する"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              startIcon={<LockIcon />}
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </Button>
            <Grid container>
              <Grid item sx={{ mt: 1, mb: 1 }}>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => alert("パスワード変更画面に遷移")}
                >
                  パスワードを忘れた場合はこちら
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => alert("アカウント登録画面に遷移")}
                >
                  アカウントをお持ちではありませんか？
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
