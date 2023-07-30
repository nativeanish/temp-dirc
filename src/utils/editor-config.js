import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import Alert from "editorjs-alert";
import Header from "editorjs-header-with-alignment";
import Paragraph from "editorjs-paragraph-with-alignment";
import NestedList from "@editorjs/nested-list";
import Checklist from "@editorjs/checklist";
import Table from "editorjs-table";
import anyButton from "editorjs-button";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Underline from "@editorjs/underline";
import Tooltip from "editorjs-tooltip";
import Strikethrough from "@sotaproject/strikethrough";
import ColorPlugin from "editorjs-text-color-plugin";
import ImageTool from "@editorjs/image";
import useBlock from "../store/useBlock";
function _getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      return resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
const blocks = useBlock.getState().data;

export default tools = {
  header: {
    class: Header,
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4, 5],
      defaultLevel: 1,
      defaultAlignment: "left",
    },
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    placeholder: "Enter a Paragraph",
    preserveBlank: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+O",
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+W",
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  delimiter: Delimiter,
  alert: {
    class: Alert,
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+A",
    config: {
      defaultType: "primary",
      messagePlaceholder: "Enter something",
    },
  },
  list: {
    class: NestedList,
    inlineToolbar: true,
    config: {
      defaultStyle: "unordered",
    },
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  AnyButton: {
    class: anyButton,
    inlineToolbar: false,
    config: {
      css: {
        btnColor: "btn--gray",
      },
    },
  },
  Marker: {
    class: Marker,
    shortcut: "CMD+SHIFT+M",
  },
  inlineCode: {
    class: InlineCode,
  },
  underline: Underline,
  tooltip: {
    class: Tooltip,
    config: {
      location: "left",
      highlightColor: "#FFEFD5",
      underline: true,
      backgroundColor: "#154360",
      textColor: "#FDFEFE",
      holder: "editorjs",
    },
  },
  strikethrough: Strikethrough,
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      colorCollections: [
        "#EC7878",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#0070FF",
        "#03A9F4",
        "#00BCD4",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFF",
      ],
      defaultColor: "#FF1300",
      type: "text",
      customPicker: true, // add a button to allow selecting any colour
    },
  },
  image: {
    class: ImageTool,
    config: {
      uploader: {
        uploadByFile(file) {
          return _getBase64(file, function (e) {}).then((data) => {
            return {
              success: 1,
              file: {
                url: data,
              },
            };
          });
        },
      },
    },
  },
};
