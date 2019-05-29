"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wx_service_1 = require("./providers/wx-service/wx-service");
const wxService = new wx_service_1.WxServiceProvider();
App({
    onLaunch() {
        wxService.checkVersionUpdate();
    },
    globalData: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0VBQXNFO0FBRXRFLE1BQU0sU0FBUyxHQUFHLElBQUksOEJBQWlCLEVBQUUsQ0FBQztBQVUxQyxHQUFHLENBQVM7SUFDUixRQUFRO1FBR0osU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFpQ25DLENBQUM7SUFDRCxVQUFVLEVBQUUsRUFDWDtDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgV3hTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tIFwiLi9wcm92aWRlcnMvd3gtc2VydmljZS93eC1zZXJ2aWNlXCI7XG5cbmNvbnN0IHd4U2VydmljZSA9IG5ldyBXeFNlcnZpY2VQcm92aWRlcigpO1xuXG4vL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICAgIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz8ocmVzOiB3eC5Vc2VySW5mbyk6IHZvaWRcbiAgICBnbG9iYWxEYXRhOiB7XG4gICAgICAgIHVzZXJJbmZvPzogd3guVXNlckluZm9cbiAgICB9XG59XG5cbkFwcDxJTXlBcHA+KHtcbiAgICBvbkxhdW5jaCgpIHtcblxuICAgICAgICAvL+ajgOafpeabtOaWsFxuICAgICAgICB3eFNlcnZpY2UuY2hlY2tWZXJzaW9uVXBkYXRlKCk7XG5cbiAgICAgICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgICAgIC8vIHZhciBsb2dzOiBudW1iZXJbXSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICAgICAgLy8gbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXG4gICAgICAgIC8vIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuICAgICAgICAvLyAvLyDnmbvlvZVcbiAgICAgICAgLy8gd3gubG9naW4oe1xuICAgICAgICAvLyAgICAgc3VjY2VzcyhfcmVzKSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coX3Jlcy5jb2RlKVxuICAgICAgICAvLyAgICAgICAgIC8vIOWPkemAgSBfcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgLy8gd3guZ2V0U2V0dGluZyh7XG4gICAgICAgIC8vICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXG4gICAgICAgIC8vICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul5bCGIHJlcyDlj5HpgIHnu5nlkI7lj7Dop6PnoIHlh7ogdW5pb25JZFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMudXNlckluZm8pXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSlcbiAgICB9LFxuICAgIGdsb2JhbERhdGE6IHtcbiAgICB9XG59KSJdfQ==