import resolve from "rollup-plugin-node-resolve";
import sourceMaps from "rollup-plugin-sourcemaps";
import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";

const input = "compiled/index.js";

const plugins = [
  babel(),
  resolve({
    extensions: [".js", ".jsx", ".json"]
  }),
  commonjs(),
  cleanup(),
  sourceMaps(),
];

export default {
  input,
  output: [
    {
      file: pkg.unpkg,
      format: "umd",
      sourcemap: true,
    }
  ],
  plugins
}
