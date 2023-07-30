import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import tools from "../utils/editor-config";
import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import useBlock from "../store/useBlock";
import stringByteLength from "string-byte-length";
const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Title",
        level: 1,
      },
    },
  ],
};
function check_image(data, api, id) {
  if (stringByteLength(data) >= 1992294) {
    alert("Cannot upload picture over 1.9 MB");
    api.blocks.delete(id);
  }
}

function check_size(data) {
  if (data.blocks.length) {
    for (let a = 0; a < data.blocks.length; a++) {
      if (data.blocks[a].type === "image") {
        data.blocks[a].data.file.url =
          "https://arweave.net/q0VLEliOz_2hDIhY1BJtbfkNadFlwFU3A6nKB-lQZKAjfajs8dj89fj83j48f34hjasjdfasdffasdfaslkfjj";
      }
    }
  }
  if (stringByteLength(JSON.stringify(data)) >= 1992294) {
    return false;
  } else {
    return true;
  }
}
function Editor() {
  const set = useBlock((state) => state.set);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        new DragDrop(editor);
        new Undo({ editor });
      },
      onChange: async (api, event) => {
        const content = Object.freeze(await editor.saver.save());
        if (content.blocks[content.blocks.length - 1]) {
          if (content.blocks[content.blocks.length - 1].type === "image") {
            check_image(
              content.blocks[content.blocks.length - 1].data.file.url,
              api,
              content.blocks.length - 1,
            );
          }
        }
        if (check_size(JSON.parse(JSON.stringify(content)))) {
          set(content);
        } else {
          alert("Cannot Upload the Data more than 1.9 MB");
        }
      },
      tools: tools,
      data: DEFAULT_INITIAL_DATA,
    });
  };
  useEffect(() => {
    initEditor();
  }, []);
  return (
    <>
      <div id="editorjs"></div>
    </>
  );
}

export default Editor;
