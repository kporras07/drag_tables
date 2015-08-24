/**
 * JS for this module.
 */

(function () {
  Drupal.behaviors.dragTables = {
    attach: function (context, settings) {
      var id = Drupal.settings.dragTables.id;
      jQuery('#' + id + '-selected option:not(:selected)', context).once('hide-not-selected', function() {
        jQuery(this).addClass('element-hidden');
      });
      jQuery('#' + id + '-selected option:selected', context).once('allowed-hide-selected', function() {
        jQuery(this).each(function() {
          var value = jQuery(this).val();
          jQuery('#' + id + '-allowed option[value=' + value + ']').addClass('element-hidden');
        });
      });
      jQuery('#' + id + ' .form-actions .button', context).once('click', function() {
        var source = '';
        var destination = '';
        jQuery(this, context).click(function(ev) {
          var target = ev.target;
          if (jQuery(target).hasClass('move-to-selected')) {
            source = '#' + id + '-allowed';
            destination = '#' + id + '-selected';
          }
          else if (jQuery(target).hasClass('move-from-selected')) {
            source = '#' + id + '-selected';
            destination = '#' + id + '-allowed';
          }
          var selected = jQuery(source).children('option:selected');
          selected.each(function() {
            var value = jQuery(this).val();
            jQuery(this).addClass('element-hidden');
            jQuery(destination).children('option[value=' + value + ']').removeClass('element-hidden');
          });
          updateValue();
        });
        function updateValue() {
          var active = jQuery(destination).children('option:not(.element-hidden)');
          var values = {};
          active.each(function() {
            values[jQuery(this).val()] = jQuery(this).val();
          });
          jQuery('#drag-tables-value').val(JSON.stringify(values));
        }
      });
    }
  };
})();
