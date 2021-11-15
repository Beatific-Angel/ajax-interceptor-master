import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

const DEFAULT_SETTING = {
  ajaxInterceptor_switchOn: false,
  ajaxInterceptor_rules: [],
}

if (chrome.storage) {
  chrome.storage.local.get(['ajaxInterceptor_switchOn', 'ajaxInterceptor_rules'], (result) => {
    window.setting = {
      ...DEFAULT_SETTING,
      ...result,
    };

    ReactDOM.render(
      <Main />,
      document.getElementById('main')
    );
  });
} else {
  window.setting = DEFAULT_SETTING;
  ReactDOM.render(
    <Main />,
    document.getElementById('main')
  );
}