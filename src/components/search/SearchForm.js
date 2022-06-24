import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SearchIcon } from "@heroicons/react/solid";
function SearchForm(props) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { searchQuery: "" },
    onSubmit: (values) => {
      navigate(`/searchResult/${values.searchQuery}`);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="">
      <div className="form-control flex flex-row items-center justify-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered text-black"
          name="searchQuery"
          {...formik.getFieldProps("searchQuery")}
        />
        <button type={"submit"}>
          <SearchIcon className="w-6 h-6 hover:cursor-pointer" type="submit" />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
