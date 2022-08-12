import {Button, Card, Grid, Input} from "@geist-ui/core";
import {Package, PenTool, Search} from "@geist-ui/icons";

function SearchComponent() {


    return (
        <Card width="100%" height="100%" shadow>
            <Card.Content width="100%" height="100%">
                <Grid.Container height="100%">
                    <Grid xs={24}>
                        {/*TODO: 此处添加LOGO,用户avatar是否添加再商讨*/}
                    </Grid>
                    <Grid xs={4.5}></Grid>
                    <Grid xs={15}>
                        <Grid.Container gap={2} height="100%">
                            <Grid xs={24}>
                                <Input iconRight={<Search/>} placeholder="键入以查询" width="100%" scale={2}>
                                </Input>
                            </Grid>
                            <Grid xs={12}>
                                <Button icon={<Package/>} width="100%" type={"success-light"} ghost>发行方</Button>
                            </Grid>
                            <Grid xs={12}>
                                <Button icon={<PenTool/>} width="100%" type={"secondary-light"} ghost>作者</Button>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                    <Grid xs={4.5}></Grid>
                </Grid.Container>
            </Card.Content>
        </Card>
    )
}

export default SearchComponent