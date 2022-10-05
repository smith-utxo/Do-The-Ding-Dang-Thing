import React from "react";
import UserCard from "../UserCard";
import {QUERY_SERVICES} from "../../utils/queries"
import { useQuery } from "@apollo/client";

function Plumbing({ showModal, setShowModal }) {

  const {loading, data} = useQuery(QUERY_SERVICES);
  const userNames = data?.username|| [];  
  
  return (
    <div className="page">
      <h2 id="page-title">This is Plumbing</h2>
      <div className="card">
      <h1 >Username: Kavon50</h1><p>Description: I'm a Fantastic Plumber! I've only flooded 2 homes.</p>
      </div>
      <div className="card">
      <h1 >Username: Arne_Collins</h1><p>Description: I'm a okay Plumber. I specialize in small leaks.</p>
      </div>
      <div className="card">
      <h1 >Username: Jim_Johnson</h1><p>Description: I like to fix things. I don't steal from the homes I'm in.</p>
      </div>
      {/* map out all user cards with corresponding service */}
      <userNames />
      <UserCard showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Plumbing;