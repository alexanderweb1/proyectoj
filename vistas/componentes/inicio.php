<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Blank Page</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">

          </ol>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>

  <!-- Main content -->
  <section class="content">

    <!-- Default box -->
    <div class="card">

    </div>
    <?php
    $objEstudiante = new ControladorEstudiante();
    $dataEstudiantes = $objEstudiante->ctrContarEstudiantes();
    ?>

    <div class="card-body">
      <div class="row">
        <!-- empieza primera tarjeta ingres -->
        <div class="col-lg-3 col-6">
          <!-- small box -->
          <div class="small-box bg-info">
            <div class="inner">
              <h3><?php echo $dataEstudiantes['numeroEstudiantes']; ?></h3>

              <p>Estudiantes</p>
            </div>
            <div class="icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <a href="estudiantes" class="small-box-footer">Más información <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- /.card-body -->
      </div>
    </div>
    <!-- /.card-body -->
  </section>

  <!-- /.content -->
</div>
<!-- /.content-wrapper -->