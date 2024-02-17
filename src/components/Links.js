import React from 'react'

const Links = (props) => {
    const {linkedin, github} = props
  return (
    <>
        <h3>Links</h3>
        {github ? <a href = {github}>{github}</a> : null}
        {linkedin ? <a href = {linkedin}>{linkedin}</a> : null}

    </>
  )
}

export default Links