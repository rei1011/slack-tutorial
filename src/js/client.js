import "../scss/index.scss";
import React from "react";
import ReactDOM from "react-dom";

import WorkSpace from "./WorkSpace";

import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート

library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための登録処理？

const app = document.getElementById("app");

ReactDOM.render(<WorkSpace/>, app);

