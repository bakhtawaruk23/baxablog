<div class="modal fade" id="edt_category" tabindex="-1" aria-labelledby="EditCategoryLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="EditCategoryLabel">Edit Category</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="frm_edt_category">
                <div class="modal-body">
                    <div class="form-group">
                        <b>Title</b>
                        <input type="text" class="form-control" name="title" id="category_title" required>
                        <input type="hidden" class="form-control" id="category_slug" readonly>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <div class="text-right flex-grow">
                        <button type="submit" class="btn btn-primary btn_edt_cat">Update <i class="fa-solid fa-spinner fa-spin btn_edt_spin_cat" style="display: none;"></i></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>