const LoginForm = () => {
  const style = {
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      maxWidth: "300px",
      margin: "auto",
    },

    input:{
        padding: "10px",
        fontsize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },

    button:{
        padding: "10px",
        backgroundColor: "#4CAF50",
        color : "white",
        border: "none",
        borderRadius: "4px",
    }
  };
  return (
    <form style={style.form}>
      <input type="text" placeholder="Username" style={style.input} />
      <input type="text" placeholder="Email" style={style.input} />
      <input type="password" placeholder="Password" style={style.input} />
      <button style={style.button}>Login</button>
    </form>
  );
};

export default LoginForm;
