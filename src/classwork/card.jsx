import React from 'react'

const Card = (props) => {
  console.log(props.task)
  return (
    <>

      {/* POSTS */}
      {p && p.length > 0 && (
        <>
          <h5 className="mb-3">Posts</h5>
          <div className="row row-cols-1 row-cols-md-3 g-3 mb-5">
            {p.map((e, i) => (
              <div className="col" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">User ID: {e.userId} | ID: {e.id}</h6>
                    <p className="card-text">{e.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* COMMENTS */}
      {c && c.length > 0 && (
        <>
          <h5 className="mb-3">Comments</h5>
          <div className="row row-cols-1 row-cols-md-3 g-3 mb-5">
            {c.map((e, i) => (
              <div className="col" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{e.email}</h6>
                    <p className="card-text">{e.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ALBUMS */}
      {a && a.length > 0 && (
        <>
          <h5 className="mb-3">Albums</h5>
          <div className="row row-cols-1 row-cols-md-3 g-3 mb-5">
            {a.map((e, i) => (
              <div className="col" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">User ID: {e.userId} | ID: {e.id}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* PHOTOS */}
      {ph && ph.length > 0 && (
        <>
          <h5 className="mb-3">Photos</h5>
          <div className="row row-cols-2 row-cols-md-4 g-3 mb-5">
            {ph.map((e, i) => (
              <div className="col" key={i}>
                <div className="card h-100">
                  <img src={e.thumbnailUrl.replace('via.placeholder.com', 'placehold.co')} className="card-img-top" alt={e.title} />
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Album ID: {e.albumId} | ID: {e.id}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* TODOS */}
      {t && t.length > 0 && (
        <>
          <h5 className="mb-3">Todos</h5>
          <div className="row row-cols-1 row-cols-md-3 g-3 mb-5">
            {t.map((e, i) => (
              <div className="col" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">User ID: {e.userId} | ID: {e.id}</h6>
                    <p className="card-text">Completed: {e.completed ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* USERS */}
      {u && u.length > 0 && (
        <>
          <h5 className="mb-3">Users</h5>
          <div className="row row-cols-1 row-cols-md-3 g-3 mb-5">
            {u.map((e, i) => (
              <div className="col" key={i}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">@{e.username} | ID: {e.id}</h6>
                    <p className="card-text">{e.email}</p>
                    <p className="card-text">{e.address.street}, {e.address.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </>
  )
}

export default Card

