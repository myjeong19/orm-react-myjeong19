import PropTypes from 'prop-types'

export const Profile = ({ users, number }) => {
    const userDescription = users.map((user) => {
        const { name, age, mail } = user
        console.log(number)
        return (
            <li key={mail}>
                <strong>{name}</strong>
                <p>{age}</p>
                <p>{mail}</p>
            </li>
        )
    })

    return <ul>{userDescription}</ul>
}

Profile.propTypes = {
    number: PropTypes.string.isRequired,
}
