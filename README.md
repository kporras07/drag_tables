CONTENTS OF THIS FILE
---------------------
* Introduction
* Installation
* Usage
* Configuration
* Maintainers

This module provides a Form API element type for having two selectboxes. This is a module for be used by a developer, due to that it doesn't provide any UI itself; you MUST use it in your code.

*Introduction

If you need a form api element that has two select boxes and you can move elements from one to another; you could use the element type that this module provides.

*Installation
Install as you would normally install a contributed drupal module. See: https://drupal.org/documentation/install/modules-themes/modules-7 for further information.

*Usage
For using this module; you need to add an element to your form an use '#type' => 'selectboxes'; then in #options you provide the options as you'll normally do for select/radios/checkboxes. If you want to provide a #default_value index; this should have this structure:
'#default_value' => array(
  'value' => '',
  'selected' => array(
    'key' => 'key',
    'key2' => 'key2',
    // More default selected options.
  ),
  'allowed' => array(),
),

*Configuration
This module doesn't need any configuration; you just need to use it from your source code.

*Maintainers
*Kevin Porras Zumbado (kporras07) - https://drupal.org/u/kporras07
