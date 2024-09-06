'use strict';

var react = require('react');
var index = require('./index.cjs');

const useAppEventListener = (type, func, dependencies) => react.useEffect(() => index.addAppEventListener(type, func), [...dependencies]);

exports.useAppEventListener = useAppEventListener;
