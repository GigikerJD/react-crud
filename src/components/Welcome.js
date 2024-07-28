import { Box, Button, ButtonGroup, List, ListItem, AppBar, Toolbar, Typography, Container } from '@mui/material'

export const Welcome = () => {

    return (
        <>
            <AppBar position="relative" color="primary">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                        React CRUD
                    </Typography>
                    <ButtonGroup
                        color="primary"
                        sx={{
                            marginRight: 0,
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        <Button
                            href="/users"
                            sx={{
                                color: "white"
                            }}
                        >
                            TABLEAU
                        </Button>
                        <Button
                            href='/login'
                            sx={{
                                color: "white"
                            }}
                        >
                            CONNEXION
                        </Button>
                        <Button
                            href="/signup"
                            sx={{
                                color: "white"
                            }}
                        >
                            INSCRIPTION
                        </Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: 4,
                textAlign: 'center',
                color: 'white',
            }}>
                <Container>
                    <Typography variant="h2" gutterBottom>
                        Welcome to React CRUD
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Easily create, read, update, and delete records with our simple interface.
                    </Typography>
                    <List sx={{ 
                        textAlign: 'left',
                        color: 'white',
                        fontFamily: "Arial, sans-serif",
                        backgroundColor: "#708090"

                    }}
                    >
                        <ListItem>Create new entries with ease</ListItem>
                        <ListItem>Read and view all your data</ListItem>
                        <ListItem>Update your records seamlessly</ListItem>
                        <ListItem>Delete data you no longer need</ListItem>
                    </List>
                </Container>
            </Box>
        </>
    )
}
