import React from 'react'

const Thumbnail = ({url}) => {
  return (
    <td className='w-25'>
        <img src={url} alt='project thumbnail' className='img-fluid img-thumbnail' />
    </td>
  )
}

export default Thumbnail