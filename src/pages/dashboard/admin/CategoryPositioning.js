import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grid } from "@mui/material";
import NavBar from "./NavBar";
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Move item from one list to other
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 5;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 5px 0`,
  width: "100%",
  borderRadius: "5px",
  height: "50px",
  textAlign: "center",
  // backgroundColor:'#14A384',

  background: isDragging ? "#0f866c" : "#14A384",

  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  // background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: "90%",
  height: "50vh",
  // height:'55vh',
});

const MultipleDragList = ({ sidebar, setSidebar }) => {
  const [state, setState] = useState({
    items: getItems(10),
    selected: getItems(5, 10),
  });
  // Defining unique ID for multiple lists
  const id2List = {
    droppable: "items",
    droppable2: "selected",
  };

  const getList = (id) => state[id2List[id]];

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    // Sorting in same list
    if (source.droppableId === destination.droppableId) {
      //     const items = reorder(
      //        getList(source.droppableId),
      //         source.index,
      //         destination.index
      //     );
      //     let item = { items };
      //     if (source.droppableId === 'droppable2') {
      //         item = { selected: items };
      //     }
      //    setState(item);
    }
    // Interlist movement
    else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      if (result.droppable.length <= 11) {
        setState({
          items: result.droppable,
          selected: result.droppable2,
        });
      }
    }
  };

  return (
    <div>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Category Positioning"
      />
      <div
        className="bg-black-pad my-5 "
        style={{ height: "80vh", padding: "30px" }}
      >
        <div className="soi-top">
          <div className="row">
            <div className="col-6 soi-orderNo">
              <span style={{ color: "#14A384" }}>How: </span>
              <span> Drag the category to change its position.</span>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <h3
                className="mx-3 cursor-pointer"
                onClick={() => {
                  //   navigate(-1);
                }}
              >
                <span className="vtext-primary mx-2 ">&#10229;</span>Back
              </h3>
            </div>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid
            container
            display={"flex"}
            alignItems="center"
            justifyContent="space-evenly"
            style={{ height: "65vh" }}
          >
            <Grid
              item
              lg={5.5}
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent={"space-evenly"}
              style={{
                height: "95%",
                borderRadius: "15px",
                border: "0.25px solid gray",
                padding: "20px",
              }}
            >
              <div style={{ margin: "10px", width: "fit-content" }}>
                <h3>Main Categories</h3>
              </div>
              <div
                className="chat-sidebar"
                style={{ overflowY: "scroll", width: "100%" }}
              >
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {state.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </Grid>
            <Grid
              item
              lg={5.5}
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              style={{
                height: "95%",
                padding: "20px",
                borderRadius: "15px",
                border: "0.25px solid gray",
              }}
            >
              <div
                style={{ margin: "10px 0px 50px 0px", width: "fit-content" }}
              >
                <h3>More Categories</h3>
              </div>
              {state.selected.length == 0 && (
                <span
                  style={{
                    color: "#707070",
                    letterSpacing: 1,
                    fontSize: "14px",
                  }}
                >
                  If the number of main categories will increase from 11, then
                  more categories will be shown here. You can drag any category
                  here from left “Main Category” section and can also drag any
                  category from here to left “Main Category” section.
                </span>
              )}
              <div
                className="chat-sidebar"
                style={{ overflowY: "scroll", width: "100%" }}
              >
                <Droppable droppableId="droppable2">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {state.selected.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </Grid>
          </Grid>
        </DragDropContext>
      </div>
    </div>
  );
};

export default MultipleDragList;
