import React from 'react';
import Breadbrum from '../components/breadbrum';
import CommonInput from '../components/commonInput';
import Button from '../components/button';
import DatePicker from '../components/DatePicker';
// import DataTable from '../components/DataTable';

function Article() {
    return (
        <div className="articles space-y-4">
            <div className="flex justify-between items-center">
                <Breadbrum pageName="Articles" />
                <div className="flex gap-4">
                    <Button text="Draft" btnClass="bg-gray-200 text-gray-800 font-medium rounded px-3 hover:bg-gray-500 hover:text-white cursor-pointer p-2" />
                    <Button text="Create" btnClass="bg-blue-200 text-gray-800 font-medium rounded px-3 hover:bg-blue-500 hover:text-white cursor-pointer p-2" />
                </div>
            </div>

            <div className="flex justify-end items-center gap-4">
                <CommonInput placeholder="Enter Article Title" />
                <CommonInput placeholder="Enter Category Name" />
                <DatePicker />
            </div>
        </div>
    );
}

export default Article;
