function RegDatePicker() {
    jQuery.noConflict();
    jQuery(document).ready(function ($) {
        $('#txtDate, #txtDate2').datepicker({
            dateFormat: 'dd/mm/yy',
            defaultDate: new Date("")
        });
    });
}
