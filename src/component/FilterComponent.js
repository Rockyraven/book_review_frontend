import DropDownForSingleValue from "./DropDownForSingleValue";
import LoginIcon from '@mui/icons-material/Login';
import Person2Icon from '@mui/icons-material/Person2';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const FilterComponent = ({ selectedRating, setSelectedRating, setSearchString }) => {
    const dropDownDataForRating = [1, 2, 3, 4, 5];
    const {user}  = useSelector((state) => state.auth);
    // console.log(user);
    return (
        <>
            <div className="flex justify-between items-center bg-gray-100">
                <div className="flex-shrink-0 ms-5">
                    <img
                        className="w-28 h-28 "
                        src="https://thumbs.dreamstime.com/z/book-logo-vector-drawing-represents-design-53875554.jpg"
                        alt="Profile"
                    />
                </div>

                <div className="flex ">
                    {/* <div className="flex flex-col items-center"> */}
                    <DropDownForSingleValue
                        placeHolder={"Rating"}
                        data={dropDownDataForRating}
                        onSelect={(selectedValue) => setSelectedRating(selectedValue)}
                        value={selectedRating}
                        optionPostFix="Rating"
                    />
                    {/* </div> */}
                    {/* <div className="flex items-center space-x-2 mt-4"> */}
                    <input
                        onChange={(e) => setSearchString(e.target.value)}
                        id="search"
                        name="search"
                        type="text"
                        className="border border-gray-300 rounded px-3 py-4 focus:outline-none focus:ring-1 focus:ring-blue-500 h-15"
                        placeholder="Search Book"
                    />
                    {/* </div> */}
                </div>

                <div className="flex-shrink-0 mr-5">
                    {user ? <Person2Icon/> : <Link to="/login"><LoginIcon /></Link>}
                    
                </div>
            </div>

        </>
    );
};
