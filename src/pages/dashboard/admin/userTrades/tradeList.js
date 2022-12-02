import { useState, useEffect } from "react";
import { FaSearch, FaAngleDown, FaFilter, FaExclamation } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { GET_All_SELLER_TRADES } from "../../../../redux/actions/trades";
import TradeRequestItem from "./TradeRequestItem";
import TableComponent from "../Components/Table";
import Popup from "../../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";

export default function TradeList({ setView, view }) {
  const dispatch = useDispatch();
  const [tableHeadData, seTableHeadData] = useState([
    { id: "tradecode", label: "Trade code" },
    { id: "inSearchOf", label: "In Search Of" },
    { id: "exchangeWith", label: "Exchange With" },
    { id: "unreadComments", label: "Unread Comments" },
    { id: "lastCommentDate", label: "last Comment Date" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      tradecode: "01",
      lastCommentDate: "2022-01-22",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
    {
      tradecode: "01",
      lastCommentDate: "2022-01-23",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
    {
      tradecode: "01",
      lastCommentDate: "2022-01-24",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
    {
      tradecode: "01",
      lastCommentDate: "2022-01-25",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
    {
      tradecode: "01",
      lastCommentDate: "2022-01-26",
      inSearchOf: "product1",
      exchangeWith: "Main Category",
      unreadComments: "6",
      action: "Action",
    },
  ]);
  // const { traderTrades } = useSelector((state) => state.TradesReducers);

  const traderTrades = [
    { _id: "1", inSearchOf: "sajgd", toExchangeWith: "kjhakjh" },
  ];
  const [sortType, setsortType] = useState("Ascending");
  const [search, setSearch] = useState("");
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [dateSelectedFilter, setdateSelectedFilter] = useState({
    fromDate: "",
    toDate: "",
  });
  const [rowData, setRowData] = useState(tableRowData);
  // const { _id } = JSON.parse(localStorage.getItem("userData"));

  // useEffect(() => {
  //   dispatch(GET_All_SELLER_TRADES(_id, localStorage.getItem('token')))
  // }, [])

  const handleSortProducts = (a, b) => {
    if (sortType === "Newest First") {
      return new Date(b.lastCommentDate) - new Date(a.lastCommentDate);
    } else if (sortType === "Oldest First") {
      return new Date(a.lastCommentDate) - new Date(b.lastCommentDate);
    }
  };

  const filterByDateHandler = () => {
    const arr = tableRowData.filter((item) => {
      let filterPass = true;
      const date = new Date(item.lastCommentDate);
      if (dateSelectedFilter.fromDate) {
        filterPass =
          filterPass && new Date(dateSelectedFilter.fromDate) <= date;
      }
      if (dateSelectedFilter.toDate) {
        filterPass = filterPass && new Date(dateSelectedFilter.toDate) >= date;
      }
      //if filterPass comes back `false` the row is filtered out
      return filterPass;
    });
    setRowData([...arr]);
  };

  const searchBarHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      // regix for filterring by firstName lastName  and  UserName in an array
      const regex = new RegExp(event.target.value, "i");

      const data = tableRowData.filter((item) => {
        return (
          regex.test(item?.exchangeWith) ||
          regex.test(item?.inSearchOf) ||
          regex.test(item?.tradecode) ||
          regex.test(item?.unreadComments) ||
          regex.test(item?.lastCommentDate)
        );
      });
      setRowData(data);
      // console.log(data);
    } else {
      setRowData(tableRowData);
    }
  };

  useEffect(() => {
    if (sortType !== "Ascending") {
      rowData.sort((a, b) => handleSortProducts(a, b));
    }
  }, [sortType]);

  return (
    <>
      <Popup open={deletePopup} setOpen={setDeletePopup}>
        <div className="soi-update-status">
          <div className="successful-popup">
            <div className="sp-icon">
              <FaExclamation size={30} fill="black" />
            </div>
            <h3>
              Are You Sure You
              <br />
              Want To Delete Trade?
            </h3>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => {
                setDeletePopup(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                setDeletePopup(false);
                setDeleteSuccessfulPopup(true);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </Popup>
      <Popup open={deleteSuccessfulPopup} setOpen={setDeleteSuccessfulPopup}>
        <div className="successful-popup">
          <div className="sp-icon">
            <TiTick size={30} fill="black" />
          </div>

          <h3>
            Deleted <br />
            Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setDeleteSuccessfulPopup(false);
              // navigate("/my-products");
            }}
          >
            Continue
          </button>
        </div>
      </Popup>
      <article className="trader-trades-main">
        <header>
          <h3>All User Trades: 3500</h3>
          <div className="right">
            <div className="right_inner-left">
              <div className="table-search-wrappper">
                <input
                  className="form-control"
                  placeholder="Search"
                  onChange={(val) => setSearch(val)}
                />
                <div className="table-icon-wrappper">
                  <FaSearch
                    className="cursor-pointer"
                    onClick={() => searchBarHandler(search)}
                  />
                </div>
              </div>
            </div>
            <div className="right_inner-right">
              <div className="dropdown  custom-dropdown">
                <div
                  className=" dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                  <FaAngleDown />
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={() => {
                        setsortType("Newest First");
                      }}
                    >
                      New to Old
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={() => {
                        setsortType("Oldest First");
                      }}
                    >
                      Old to New
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown  custom-dropdown">
                <div
                  className=" dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaFilter className="title-color" />
                  &nbsp;Filter By Date&nbsp; <FaAngleDown />
                </div>
                <ul
                  className="dropdown-menu filter-dropdown"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <div className="date-input-wrapper">
                    <label>From</label>
                    <input
                      type="date"
                      placeholder="02/02/2022"
                      onChange={(event) =>
                        setdateSelectedFilter({
                          ...dateSelectedFilter,
                          fromDate: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="date-input-wrapper">
                    <label>To</label>
                    <input
                      type="date"
                      pattern="yy/mm/dd"
                      placeholder="02/03/2022"
                      onChange={(event) =>
                        setdateSelectedFilter({
                          ...dateSelectedFilter,
                          toDate: event.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    onClick={() => {
                      filterByDateHandler();
                      // setsortType("Filter Date");
                    }}
                    className="btn btn-solid btn-solid-primary mx-auto"
                  >
                    Apply
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <TableComponent
          edit={"tradeDetail"}
          tHeadData={tableHeadData}
          tRowData={rowData}
          // setView={setView}
          delete1
          setOpen={setDeletePopup}
          onClick={() => {
            setView("User Trade Details");
          }}
        />
      </article>
    </>
  );
}
