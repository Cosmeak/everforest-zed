const base = {
  $schema: "https://zed.dev/schema/themes/v0.1.0.json",
  name: "Everforest",
  author: "https://github.com/Cosmeak",
  themes: [],
};

const theme = {
  name: "",
  appearance: "",
  style: {
    background: "bg_dim",
    border: "bg1",
    "border.disabled": null,
    "border.focused": null,
    "border.variant": null,
    "border.selected": null,
    "border.transparent": null,
    conflict: "yellow",
    "conflict.background": "bg_yellow",
    "conflict.border": null,
    created: "green",
    "created.background": "bg_green",
    "created.border": null,
    deleted: "red",
    "deleted.background": "bg_red",
    "deleted.border": null,
    "drop_target.background": "bg4",
    "editor.active_line.background": "bg1",
    "editor.active_line_number": "fg_default",
    "editor.active_wrap_guide": "bg4",
    "editor.background": "bg0",
    "editor.document_highlight.read_background": "bg_blue",
    "editor.document_highlight.write_background": "bg_blue",
    "editor.foreground": "fg_default",
    "editor.gutter.background": "bg0",
    "editor.highlighted_line.background": null,
    "editor.invisible": "yellow",
    "editor.line_number": "gray0",
    "editor.subheader.background": "bg0",
    "editor.wrap_guide": "bg4",
    "element.active": null,
    "element.background": "bg_dim",
    "element.disabled": null,
    "element.hover": "bg2",
    "element.selected": "bg_visual",
    "elevated_surface.background": "bg2",
    error: "red",
    "error.background": "bg_red",
    "error.border": null,
    "ghost_element.active": null,
    "ghost_element.background": null,
    "ghost_element.disabled": null,
    "ghost_element.hover": null,
    "ghost_element.selected": null,
    hidden: null,
    "hidden.background": null,
    "hidden.border": null,
    hint: "green",
    "hint.background": "bg_green",
    "hint.border": null,
    icon: null,
    "icon.accent": null,
    "icon.disabled": null,
    "icon.muted": null,
    "icon.placeholder": null,
    ignored: "gray1",
    "ignored.background": null,
    "ignored.border": null,
    info: "blue",
    "info.background": "bg_blue",
    "info.border": null,
    "link_text.hover": null,
    modified: "blue",
    "modified.background": "bg_blue",
    "modified.border": null,
    "pane.focused_border": null,
    "panel.background": "bg_dim",
    "panel.focused_border": null,
    players: [],
    predictive: "gray1",
    "predictive.background": null,
    "predictive.border": null,
    renamed: null,
    "renamed.background": null,
    "renamed.border": null,
    "scrollbar.thumb.border": null,
    "scrollbar.thumb.hover_background": null,
    "scrollbar.track.background": null,
    "scrollbar.track.border": null,
    "scrollbar_thumb.background": null,
    "search.match_background": null,
    "status_bar.background": "bg_dim",
    success: "green",
    "success.background": "bg_green",
    "success.border": null,
    "surface.background": "bg_dim",
    syntax: {
      attribute: {
        color: "purple",
        font_style: null,
        font_weight: null,
      },
      boolean: {
        color: "purple",
        font_style: null,
        font_weight: null,
      },
      comment: {
        color: "gray1",
        font_style: "italic",
        font_weight: null,
      },
      "comment.doc": {
        color: "gray1",
        font_style: "italic",
        font_weight: null,
      },
      constant: {
        color: "aqua",
        font_style: null,
        font_weight: null,
      },
      constructor: {
        color: "green",
        font_style: null,
        font_weight: null,
      },
      embedded: {
        color: null,
        font_style: null,
        font_weight: null,
      },
      "emphasis.strong": {
        color: null,
        font_style: null,
        font_weight: 700,
      },
      function: {
        color: "green",
        font_style: null,
        font_weight: null,
      },
      keyword: {
        color: "red",
        font_style: null,
        font_weight: null,
      },
      number: {
        color: "purple",
        font_style: null,
        font_weight: null,
      },
      operator: {
        color: "orange",
        font_style: null,
        font_weight: null,
      },
      preproc: {
        color: "purple",
        font_style: null,
        font_weight: null,
      },
      property: {
        color: "fg_defalt",
        font_style: null,
        font_weight: null,
      },
      punctuation: {
        color: "gray1",
        font_style: null,
        font_weight: null,
      },
      "punctuation.bracket": {
        color: "gray1",
        font_style: null,
        font_weight: null,
      },
      "punctuation.delimiter": {
        color: "gray1",
        font_style: null,
        font_weight: null,
      },
      "punctuation.list_marker": {
        color: "gray1",
        font_style: null,
        font_weight: null,
      },
      "punctuation.special": {
        color: "blue",
        font_style: null,
        font_weight: null,
      },
      string: {
        color: "aqua",
        font_style: null,
        font_weight: null,
      },
      "string.escape": {
        color: "green",
        font_style: null,
        font_weight: null,
      },
      "string.regex": {
        color: "green",
        font_style: null,
        font_weight: null,
      },
      "string.special": {
        color: "blue",
        font_style: null,
        font_weight: null,
      },
      "string.special.symbol": {
        color: "yellow",
        font_style: null,
        font_weight: null,
      },
      tag: {
        color: "orange",
        font_style: null,
        font_weight: null,
      },
      "text.literal": {
        color: "green",
        font_style: null,
        font_weight: null,
      },
      type: {
        color: "yellow",
        font_style: null,
        font_weight: null,
      },
      variable: {
        color: "fg_default",
        font_style: null,
        font_weight: null,
      },
      "variable.special": {
        color: "purple",
        font_style: null,
        font_weight: null,
      },
      variant: {
        color: null,
        font_style: null,
        font_weight: null,
      },
      label: {
        color: "orange",
        font_style: null,
        font_weight: null,
      },
    },
    "tab.active_background": "bg0",
    "tab.inactive_background": "bg_dim",
    "tab_bar.background": "bg_dim",
    "terminal.ansi.black": null,
    "terminal.ansi.blue": null,
    "terminal.ansi.cyan": null,
    "terminal.ansi.green": null,
    "terminal.ansi.magenta": null,
    "terminal.ansi.red": null,
    "terminal.ansi.white": null,
    "terminal.ansi.yellow": null,
    "terminal.ansi.bright_black": null,
    "terminal.ansi.bright_blue": null,
    "terminal.ansi.bright_cyan": null,
    "terminal.ansi.bright_green": null,
    "terminal.ansi.bright_magenta": null,
    "terminal.ansi.bright_red": null,
    "terminal.ansi.bright_white": null,
    "terminal.ansi.bright_yellow": null,
    "terminal.ansi.dim_black": null,
    "terminal.ansi.dim_blue": null,
    "terminal.ansi.dim_cyan": null,
    "terminal.ansi.dim_green": null,
    "terminal.ansi.dim_magenta": null,
    "terminal.ansi.dim_red": null,
    "terminal.ansi.dim_white": null,
    "terminal.ansi.dim_yellow": null,
    "terminal.background": "bg0",
    "terminal.bright_foreground": null,
    "terminal.dim_foreground": null,
    "terminal.foreground": "fg_default",
    text: "fg_default",
    "text.accent": "blue",
    "text.disabled": "gray1",
    "text.muted": "gray0",
    "text.placeholder": null,
    "title_bar.background": "bg_dim",
    "toolbar.background": "bg_dim",
    unreachable: "red",
    "unreachable.background": "bg_red",
    "unreachable.border": null,
    warning: "yellow",
    "warning.background": "bg_yellow",
    "warning.border": null,
  },
};

function build() {
  const fs = require("fs");
  const path = require("path");
  const colorFiles = fs.readdirSync(path.join(__dirname, "colors"));
  for (file of colorFiles) {
    const themeWithColors = JSON.parse(JSON.stringify(theme));
    colors = require(path.join(__dirname, "colors", file));
    themeWithColors.name = colors.name;
    themeWithColors.appearance = colors.type;

    for (style in themeWithColors.style) {
      // Do not parse this
      if (
        themeWithColors.style[style] == null ||
        typeof themeWithColors.style[style] == "array"
      ) {
        continue;
      }
      // themeWithColors.style[style].hasOwnProperty("color")
      if (typeof themeWithColors.style[style] == "object") {
        for (element in themeWithColors.style[style]) {
          if (themeWithColors.style[style][element].hasOwnProperty("color")) {
            themeWithColors.style[style][element].color =
              "#" + colors[themeWithColors.style[style][element].color];
          }
        }
        continue;
      }

      if (typeof themeWithColors.style[style] == "string") {
        themeWithColors.style[style] =
          "#" + colors[themeWithColors.style[style]];
        continue;
      }
    }

    base.themes.push(themeWithColors);
  }

  fs.writeFileSync(
    path.join(__dirname, "themes", "everforest.json"),
    JSON.stringify(base),
  );
}

build();
