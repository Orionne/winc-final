import React, { useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useData } from "../components/DataContext";
import { EditEvent } from "../components/EditEvent";
import { ViewEvent } from "../components/ViewEvent";

export const loader = async ({ params }) => {
  const request = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const oneEvent = await request.json();
  return oneEvent;
};

export const action = async ({ request, params }) => {
  const toastId = "action-on-event";
  const formData = Object.fromEntries(await request.formData());
  const intent = formData["intent"];
  if (intent === "edit") {
    const body = JSON.stringify({ ...formData });
    await fetch(`http://localhost:3000/events/${params.eventId}`, {
      method: "PATCH",
      body,
      headers: { "Content-Type": "application/json" },
    });
    toast.success("Event has been updated!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, //3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      toastId,
      transition: Slide,
    });
    return redirect(`/`);
  }
  if (intent == "delete") {
    if (window.confirm("Are you sure you wanna delete the event?")) {
      await fetch(`http://localhost:3000/events/${params.eventId}`, {
        method: "DELETE",
      });
      toast.success("Event has been deleted", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, //3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId,
        transition: Slide,
      });
      return redirect(`/`);
    }
  }
};

export const EventPage = () => {
  const [editMode, setEditMode] = useState(false);
  const theEvent = useLoaderData();
  const { categories } = useData();
  const { users } = useData();

  let categoryNames;
  if (categories.length > 0) {
    if (Array.isArray(theEvent.categoryIds)) {
      categoryNames = theEvent.categoryIds.map((category) => {
        const cat = categories.find((obj) => obj.id === category);
        return cat.name;
      });
    }
  }

  let eventAuthor;
  if (users.length > 0) {
    eventAuthor = users.find((obj) => obj.id === parseInt(theEvent.createdBy));
  }

  const clickEditFn = () => {
    setEditMode((editMode) => !editMode);
  };

  return (
    <>
      {!editMode ? (
        <ViewEvent
          theEvent={theEvent}
          eventAuthor={eventAuthor}
          categoryNames={categoryNames}
          clickEditFn={clickEditFn}
          // deleteFn={deleteFn}
        />
      ) : (
        <EditEvent
          users={users}
          theEvent={theEvent}
          eventAuthor={eventAuthor}
          clickEditFn={clickEditFn}
          categories={categories}
        />
      )}
    </>
  );
};
