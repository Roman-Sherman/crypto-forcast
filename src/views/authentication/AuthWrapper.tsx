import { Card } from "@mui/material"

const AuthWrapper = (props: any) => {
    return (
        <Card>
            {props.children}
        </Card>
    )
}

export default AuthWrapper;