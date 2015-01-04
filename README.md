# react-growable-textarea

Growable Textarea for [React](http://facebook.github.io/react/) that uses css purely without any javascript calculations. 

This growable textarea works by creating a hidden PRE shim that grows with the size of the text. 
Please let me know if you experience any issues with this. I haven't been able to test on browsers other than Chrome, Firefox and Safari.

## Usage

    <GrowableTextarea name="myFormEl" value="Some initial text"/>

    <GrowableTextarea name="myFormEl" maxHeight={125} placeholder="max height:125px"/>

    <GrowableTextarea name="myFormEl" minHeight={60} maxHeight={125} placeholder="min height: 60px; max height:125px"/>

## Authors

- [Marc Schipperheyn](https://github.com/mschipperheyn)

## Build

```bash
npm install
```

```bash
webpack
```

(Minified)
```bash
webpack -p
```

Open index.html to see some examples