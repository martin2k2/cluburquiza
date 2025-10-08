<?php
         $conexion=mysqli_connect('localhost', 'root', '', 'id18593889_datos000');



?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscador </title>
    <link rel="stylesheet" href="assets/css/estilosdeuda.css">
   
    <meta name="viewport" content="width=device-width, 
    user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  
</head>
<br>

<body>


<div class="iniciar-deuda">
  <!--<img src="assets/images/urquiza.jpg" alt="" class="logo-bienvenidos">-->
   <h1 class="titulo-bienvenidos"> MOVIMIENTOS DE PAGOS</h1>
   <a href="index.php" class="cerrar-seccion"> Cerrar Sesión</a>
</div>

<br>
<!-- MUSTRA TODA LA BASE DE DATOS
<table border ="1">
 <tr>
      <tr>DNI</tr>
      <tr>APELLIDO</tr>
      <tr>NOMBRE</tr>
      <tr>CATEGORÍA</tr>
 </tr> -->
  <?php
             $sql="SELECT * from datos";
               $result=mysqli_query($conexion,$sql);

               while($mostrar=mysqli_fetch_array($result)) { 
         ?>
 <!--                 <tr>
                  <td><?php echo $mostrar['DNI'] ?><b></td>
                  <td><?php echo $mostrar['APELLIDO'] ?></td>
                  <td><?php echo $mostrar['NOMBRE'] ?></td>
                  <td><?php echo $mostrar['CATEGORÍA'] ?></td>
                  </tr>-->
         <?php         
               }
               ?>

                </table>
<!--TERMINA MUESTRA TODA LA BD-->
<h2>Busqueda de socio por DNI</h2> 

      <form action="" method="get" >
         <input type="text" name="busqueda" > <br><br>
         <input type="submit" name="enviar" value="BUSCAR">
     </form>
    <br>     
    <br>   
    <!--<style>
        .equalDivide tr td { width:25%; }
   </style> -->
  
    <?php


include 'php/config.php';



   if(isset($_GET['enviar'])){
         $busqueda = $_GET['busqueda'];
         $consulta = $con->query("SELECT * FROM datos WHERE DNI LIKE '%$busqueda'"); /*busca socio*/
        
         while ($row = $consulta->fetch_array()) {
            echo $row['DNI'].' - '.$row['APELLIDO'].'  '.$row['NOMBRE'].' - '.$row['CATEGORÍA'].'<br><br>';
               }
           
          
     
         $consulta = $con->query("SELECT * FROM morosos WHERE DNI LIKE '%$busqueda'"); /*consulta deuda*/
         
        while ($row = $consulta->fetch_array()) {
                echo $row['DEUDA'].'  MONTO ADEUDADO <br><br>'; 
                       
      //<br>
      //<br>
      //<br><br>FECHA PAGO - MEDIO DE PAGO - MES ABONADO - $ ABONADO - $ TOTAL - $ ADEUDADO - COBRADO POR - NUMERO RECIBO - AÑO <br><br>' ;
            }
        

        $consulta = $con->query("SELECT * FROM pagos WHERE DNI_SOCIO LIKE '%$busqueda' ORDER BY ANO, MES_ABONADO asc  "); /*consulta pagos*/
        
        echo  "
        <table width=\"100%\" border=\"1\" >
            <tr>
              <td width=\"11%\"><b><center>FECHA PAGO</center></b></td>
              <td width=\"11%\"><b><center>MEDIO DE PAGO</center></b></td>
              <td width=\"11%\"><b><center>MES ABONADO</center></b></td>
              <td width=\"11%\"><b><center>MONTO ABONADO</center></b></td>
              <td width=\"11%\"><b><center>MONTO TOTAL</center></b></td>
              <td width=\"11%\"><b><center>MONTO ADEUDADO</center></b></td>
              <td width=\"11%\"><b><center>COBRADO POR</center></b></td>
              <td width=\"11%\"><b><center>NUMERO RECIBO</center></b></td>
              <td width=\"11%\"><b><center>AÑO</center></b></td>
            </tr>
        <tr> 
                
        </tr>
        </table>
    ";   
   
    while ($row = $consulta->fetch_array()) {
      //  <table  cellpadding="0" cellspacing="0" width="100%" border="0">
      //  <table cellpadding="0" cellspacing="0" width="100%" border="1" height="350px"> 
     
            echo  "
            
          
            <table width=\"100%\"  cellpadding=\"5%\"  border=\"1\"  >
            <tr> 
            
                <td width=\"11%\"><center>".$row['FECHA_PAGO']."</center></td>
                <td width=\"11%\"><center>".$row['MEDIO_DE_PAGO']."</center></td>
                <td width=\"11%\"><center>".$row['MES_ABONADO']."</center></td>
                <td width=\"11%\"><center>".$row['MONTO_ABONADO']."</center></td>
                <td width=\"11%\"><center>".$row['MONTO_TOTAL']."</center></td>
                <td width=\"11%\"><center>".$row['MONTO_ADEUDADO']."</center></td>
                <td width=\"11%\"><center>".$row['COBRADO_POR']."</center></td>
                <td width=\"11%\"><center>".$row['NUMERO_RECIBO']."</center></td>
                <td width=\"11%\"><center>".$row['ANO']."</td>
            </tr>
            ";  

            //   echo $row['FECHA_PAGO'].' '.$row['MEDIO_DE_PAGO'].' '.$row['MES_ABONADO'].' '.$row['MONTO_ABONADO'].' '
            //        .$row['MONTO_TOTAL'].' '.$row['MONTO_ADEUDADO'].' '.$row['COBRADO_POR'].' '.$row['NUMERO_RECIBO'].' '            
            //        .$row['ANO'].' '.'<br>';

 

               
/// echo $row['FECHA_PAGO']."********".$row['MEDIO_DE_PAGO']."********".$row['MES_ABONADO']."********".$row['MONTO_ABONADO']."********"
///             .$row['MONTO_TOTAL']."********".$row['MONTO_ADEUDADO']."********".$row['COBRADO_POR']."********".$row['NUMERO_RECIBO']."********"            
///              .$row['ANO'].' '.'<br>';



               }
                exit();
                
            }
            
           



            




    /**if(isset($_GET['enviar'])){
            $busqueda = $_GET['busqueda'];

        $consulta =$con->query("SELECT * FROM datos d INNER JOIN morosos m ON d.DNI = m.DNI ");
         while ($row = $consulta->fetch_array()){
          echo $row['DNI']."<br>".$row['DEUDA']."<br><br>"; 
         }
        } */
     ?> 


</body>
</html>