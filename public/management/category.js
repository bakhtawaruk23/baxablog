$(function(){
    $('#category_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: '/category/json_index',
        columns: [
            { data: 'DT_RowIndex', 'orderable': false, 'searchable': false, class: 'text-center' },
            {data: 'title'},
            {data: 'action', class: 'text-center'}
        ]
    });
})

$('#category_table').DataTable({
    processing: true,
    serverSide: true,
    ajax: '/category/json_index',
    columns: [
       { data: 'DT_RowIndex', 'orderable': false, 'searchable': false, class: 'text-center' },
       {data: 'title'},
       {data: 'action', class: 'text-center'}
    ]
 });

 //Create Category
 $("#frm_crt_category").on('submit', function(e){
    e.preventDefault();
    $.ajaxSetup({
       headers:{
         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
       }
    });
    $.ajax({
       type: "POST",
       url: "/category/store",
       data: new FormData(this),
       contentType: false,
       cache: false,
       processData: false,
       dataType: "json",
       beforeSend: function(){
           $('.btn_crt_spin_cat').show();
           $('.btn_crt_cat').prop('disabled', true);
       },
       success: function (response) {
          if (response.success) {
              $('#frm_crt_category')[0].reset();
              $('#category_table').DataTable().ajax.reload();
          }
       },
       complete: function(){
           $('#crt_category').modal('hide');
           $('.btn_crt_spin_cat').hide();
           $('.btn_crt_cat').prop('disabled', false);
       },
    });
 });


 //Edit Category
 $("#frm_edt_category").on('submit', function(e){
    e.preventDefault();
    $.ajaxSetup({
       headers:{
         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
       }
    });
    $.ajax({
      type: "POST",
      url: "/category/"+$('#category_slug').val()+"/update",
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      dataType: "json",
      beforeSend: function(){
        $('.btn_edt_spin_cat').show();
        $('.btn_edt_cat').prop('disabled', true);
      },
      success: function (response) {
        if (response.success) {
           $('#frm_edt_category')[0].reset();
           $('#category_table').DataTable().ajax.reload();
        }
      },
      complete: function(){
         $('#edt_category').modal('hide');
         $('.btn_edt_spin_cat').hide();
         $('.btn_edt_cat').prop('disabled', false);
      },
    });
 });

 //Delete Category
 function delete_category(slug)
{
    $("body").prepend($('#delete_category'));
    $('#delete_category').modal('show');


    $("#frm_destroy_category").on('submit', function(e){
        e.preventDefault();
        $.ajaxSetup({
            headers:{
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: "DELETE",
            url: "/category/"+slug+"/delete",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function(){
                $('.btn_delete_spin_cat').show();
                $('.btn_delete_cat').prop('disabled', true);
            },
            success: function (response) {
                if (response.success) {
                    $('#frm_destroy_category')[0].reset();
                    $('#category_table').DataTable().ajax.reload();
                }
            },
            complete: function(){
                $('#delete_category').modal('hide');
                $('.btn_delete_spin_cat').hide();
                $('.btn_delete_cat').prop('disabled', false);
            },
        });
    });
}

 $.ajaxSetup({
    headers:{
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
 });

 $(function(){
    // SOME CODE HERE
  })

  function edit_category(slug)
{
    $.ajax({
        type: "GET",
        url: "/category/"+slug+"/edit",
        beforeSend: function(){

        },
        success: function (response) {
            $("body").prepend($('#edt_category'));
            $('#edt_category').modal('show');

            $('#category_title').val(response.title);
            $('#category_slug').val(response.slug);
        }
    });
}


