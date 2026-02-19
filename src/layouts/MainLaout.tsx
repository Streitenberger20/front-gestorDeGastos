import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function MainLayout(props: { children: React.ReactNode }){
  return (
    <>

          <AppBar position="static" >
              <Toolbar>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      GESTOR DE GASTOS
                  </Typography>

                  <Button
                        color="inherit" 
                        sx={{ textTransform: "none" }}
                  >
                    INICIO  
                  </Button>

                  <Button
                      color="inherit"
                      sx={{ textTransform: "none" }}
                  >
                    GASTOS
                  </Button>

                  <Box sx={{ flex: 1 }} />

                  <Button
                      color="inherit"
                      sx={{ textTransform: "none" }}
                      onClick={() => window.alert("Acción")}
                  >
                      Acción
                  </Button>
              </Toolbar>
          </AppBar>
      <div>{props.children}</div>
      
      </>
  );


}