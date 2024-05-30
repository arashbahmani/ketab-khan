import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import InputScalableLabel from "../input/InputScalableLabel/InputScalableLabel";
import InputMultipleDropdown from "../input/InputMultipleDropdown/InputMultipleDropdown";
import Scores from "../Scores";

const InputInfoUI = ({ singleBook }) => {
  const { onInputChange } = useContext(BookContext);

  return (
    <div className="m-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="input-group mb-2">
            <InputScalableLabel
              inputName="name"
              type="text"
              label="اسم کتاب"
              iconClass="fa fa-book"
              onInputChange={onInputChange}
              singleBook={singleBook.name}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="input-group mb-2">
            <InputScalableLabel
              inputName="pageNumbers"
              type="number"
              label="تعداد صفحات"
              iconClass="fa fa-hashtag"
              onInputChange={onInputChange}
              singleBook={singleBook.pageNumbers}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="input-group mb-2">
            <InputScalableLabel
              inputName="writer"
              type="text"
              label="نویسنده"
              iconClass="fa fa-pen"
              onInputChange={onInputChange}
              singleBook={singleBook.writer}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="input-group mb-2">
            <InputScalableLabel
              inputName="editor"
              type="text"
              label="ویراستار"
              iconClass="fa fa-pen-ruler"
              onInputChange={onInputChange}
              singleBook={singleBook.editor}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="input-group mb-2">
            <InputScalableLabel
              inputName="year"
              type="text"
              label="سال نگارش (میلادی)"
              iconClass="fa fa-calendar"
              onInputChange={onInputChange}
              singleBook={singleBook.year}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="input-group mb-2">
            <InputScalableLabel
              inputName="isbn"
              type="text"
              label="شابک"
              iconClass="fa fa-barcode"
              onInputChange={onInputChange}
              singleBook={singleBook.isbn}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <div className="input-group mb-2">
            <InputMultipleDropdown
              label="دسته بندی ها (برای انتخاب چند مورد، از کلید ctrl استفاده کنید)"
              inputName="group"
              groupId={singleBook.group}
              onInputChange={onInputChange}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="input-group mb-2 mt-5">
            <InputScalableLabel
              inputName="photo"
              type="text"
              label="لینک تصویر"
              iconClass="fa fa-paperclip"
              onInputChange={onInputChange}
              singleBook={singleBook.photo}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className="input-group mb-2">
            <InputScalableLabel
              inputName="publisher"
              type="text"
              label="انتشارات"
              iconClass="fa fa-building"
              onInputChange={onInputChange}
              singleBook={singleBook.publisher}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className="input-group mb-2">
            <InputScalableLabel
              inputName="translator"
              type="text"
              label="مترجم"
              iconClass="fa fa-language"
              onInputChange={onInputChange}
              singleBook={singleBook.translator}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div dir="ltr" className="input-group mb-2">
            <Scores score={singleBook.score} />
          </div>
        </div>
      </div>

      <div className="row" style={{ height: "10vh" }}>
        <div className="col">
          <div className="input-group mb-2 h-100">
            <InputScalableLabel
              inputName="story"
              type="textarea"
              label="توضیحات اضافی"
              onInputChange={onInputChange}
              singleBook={singleBook.story}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputInfoUI;
