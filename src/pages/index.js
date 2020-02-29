import React from 'react';
import { navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n';
import languages from '../data/languages'

export default class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args);
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      const homeUrl = withPrefix(`/${langKey}/`);

      navigate(homeUrl);
    }
  }

  render() {
    return (<div />);
  }
}