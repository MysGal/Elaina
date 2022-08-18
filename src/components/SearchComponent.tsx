import {Button, Card, Grid, Input} from "@geist-ui/core";
import {Globe, Package, PenTool, Search} from "@geist-ui/icons";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {searchKeyWordState} from "../state/SearchStates";
import {useNavigate} from "@tanstack/react-location";

function SearchComponent() {
    const navigate = useNavigate()
    const searchKeyWord = useRecoilValue(searchKeyWordState)
    const setSearchKeyWord = useSetRecoilState(searchKeyWordState)
    const search = function (type: string) {
        navigate({
            // 不依靠路径传递keywork，全都根据状态走
            to: "/search",
            replace: true
        })
    }

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
                                <Input iconRight={<Search/>} placeholder="输入关键词并选择模式来查询" width="100%"
                                       scale={2} value={searchKeyWord}
                                       onChange={ev => setSearchKeyWord(ev.target.value)}>
                                </Input>
                            </Grid>
                            <Grid xs={8} justify={"center"}>
                                <Button icon={<Globe/>} type="secondary" onClick={() => search("global")} ghost auto
                                        effect>全局</Button>
                            </Grid>
                            <Grid xs={8}>
                                <Button
                                    icon={<Package/>}
                                    type={"success-light"}
                                    // TODO: 确认下搜索问题
                                    onClick={() => search("tags")}
                                    ghost
                                    auto
                                    effect>
                                    发行商
                                </Button>
                            </Grid>
                            <Grid xs={8}>
                                <Button icon={<PenTool/>} type={"secondary-light"} ghost auto effect>作者</Button>
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